import { api } from '../../../config/api.js'

export default async function handler (req, res) {
  const { query } = req
  const { id } = query
  const apiUrl = `${api.url}pokemon/${id}`

  let name = ''

  try {
    const req = await fetch(apiUrl)
    const data = await req.json()

    const moves = []
    for (let i = 0; i < data.moves.length; i++) {
      for (let z = 0; z < data.moves[i].version_group_details.length; z++) {
        if (data.moves[i].version_group_details[z].version_group.name === 'sword-shield') {
          moves.push({
            name: data.moves[i].move.name,
            level_learned_at: data.moves[i].version_group_details[z].level_learned_at,
            move_learn_method: data.moves[i].version_group_details[z].move_learn_method.name
          })
        }
      }
    }
    moves.sort((a, b) => {
      if (a.level_learned_at < b.level_learned_at) {
        return -1
      }
      if (a.level_learned_at > b.level_learned_at) {
        return 1
      }
      return 0
    })
    name = (data.name.charAt(0).toUpperCase() + data.name.slice(1))
    res.status(200).json({
      name,
      id: data.id,
      moves,
      sprite: data.sprites.front_default,
      types: data.types,
      abilities: data.abilities,
      height: (data.height / 10),
      weight: (data.weight / 10),
      stats: {
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        special_defense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat
      }
    })
  } catch (error) {
    res.status(404).json({
      error: 'test'
    })
  }
}
