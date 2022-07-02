import styles from './styles.module.css'

export const PokemonMoves = ({ moves }) => {
  return (
    <div className={styles.movesContainer}>
      <h2>Moves</h2>
      <h3>Leveling</h3>
      <div className={styles.movesList}>
      {moves.map((move, key) => {
        if (move.move_learn_method === 'level-up') {
          return (<p key={key} className={styles.movesName}>{move.level_learned_at} - {move.name}</p>)
        } else return null
      })}
      </div>
      <h3>MT/MO</h3>
      <div className={styles.movesList}>
      {moves.map((move, key) => {
        if (move.move_learn_method === 'machine') {
          return (<p key={key} className={styles.movesName}>{move.name}</p>)
        } else return null
      })}
      </div>
      <div className={styles.movesList}>
      <h3>Tutor</h3>
      {moves.map((move, key) => {
        if (move.move_learn_method === 'tutor') {
          return (<p key={key} className={styles.movesName}>{move.name}</p>)
        } else return null
      })}
      </div>
    </div>
  )
}
