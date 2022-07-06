import { api } from '../../../../config/api'

export default function handler (req, res) {
  const { query } = req
  const { id } = query
  const apiUrl = `${api.url}pokemon/${id.toLowerCase()}`

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      const pokemonData = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.versions['generation-viii'].icons.front_default
      }

      const pokemon = [pokemonData]
      res.status(200).json({
        pokemon
      })
    })
    .catch(e => {
      res.status(404).json({
        error: 'This pokemon does not exist'
      })
    })
}
