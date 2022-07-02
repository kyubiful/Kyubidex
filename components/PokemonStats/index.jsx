import styles from './styles.module.css'
import { StatsBar } from '../StatsBar'

const getBarPercentage = (stat) => {
  let percentage = (stat / 255 * 100)
  if (percentage < 14) {
    percentage = 14
  }
  return percentage
}

export const PokemonStats = ({ stats }) => {
  const statsPercentage = {
    hp: getBarPercentage(stats.hp),
    attack: getBarPercentage(stats.attack),
    defense: getBarPercentage(stats.defense),
    special_attack: getBarPercentage(stats.special_attack),
    special_defense: getBarPercentage(stats.special_defense),
    speed: getBarPercentage(stats.speed)
  }

  const statsPercentageString = {
    hp: `${statsPercentage.hp}%`,
    attack: `${statsPercentage.attack}%`,
    defense: `${statsPercentage.defense}%`,
    special_attack: `${statsPercentage.special_attack}%`,
    special_defense: `${statsPercentage.special_defense}%`,
    speed: `${statsPercentage.speed}%`
  }

  return (
    <div className={styles.statsContainer}>
      <h2>Stats</h2>
      <div className={styles.statsBarContainer}>
        <p className={styles.statusBarTitle}>Hp: {stats.hp}</p>
        <div className={styles.statsBar}>
          <StatsBar barPercentageString={statsPercentageString.hp} barPercentage={statsPercentage.hp}/>
        </div>
      </div>
      <div className={styles.statsBarContainer}>
        <p className={styles.statusBarTitle}>Atk: {stats.attack}</p>
        <div className={styles.statsBar}>
          <StatsBar barPercentageString={statsPercentageString.attack} barPercentage={statsPercentage.attack}/>
        </div>
      </div>
      <div className={styles.statsBarContainer}>
        <p className={styles.statusBarTitle}>Def: {stats.defense}</p>
        <div className={styles.statsBar}>
          <StatsBar barPercentageString={statsPercentageString.defense} barPercentage={statsPercentage.defense}/>
        </div>
      </div>
      <div className={styles.statsBarContainer}>
        <p className={styles.statusBarTitle}>S.Atk: {stats.special_attack}</p>
        <div className={styles.statsBar}>
          <StatsBar barPercentageString={statsPercentageString.special_attack} barPercentage={statsPercentage.special_attack}/>
        </div>
      </div>
      <div className={styles.statsBarContainer}>
        <p className={styles.statusBarTitle}>S.Def: {stats.special_defense}</p>
        <div className={styles.statsBar}>
          <StatsBar barPercentageString={statsPercentageString.special_defense} barPercentage={statsPercentage.special_defense}/>
        </div>
      </div>
      <div className={styles.statsBarContainer}>
        <p className={styles.statusBarTitle}>Speed: {stats.speed}</p>
        <div className={styles.statsBar}>
          <StatsBar barPercentageString={statsPercentageString.speed} barPercentage={statsPercentage.speed}/>
        </div>
      </div>
    </div>
  )
}
