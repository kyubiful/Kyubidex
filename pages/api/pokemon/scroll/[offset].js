import { api } from '../../../../config/api.js'

export default function handler (req, res) {
  const apiUrl = `${api.url}pokemon/?limit=40&offset=`
  const offset = req.query.offset
  fetch(`${apiUrl}${offset}`)
    .then(res => res.json())
    .then(data => {
      const pokemons = []
      data.results.forEach((pokemon) => {
        const url = pokemon.url.split('/')
        const pokemonData = {
          id: url[url.length - 2],
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${url[url.length - 2]}.png`
        }
        pokemons.push(pokemonData)
      })
      res.status(200).json({
        pokemonList: pokemons
      })
    })
    .catch(e => {
      res.status(404).json({
        error: e
      })
    })
}
