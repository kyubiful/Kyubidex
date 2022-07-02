import styles from './styles.module.css'

export const StatsBar = ({ barPercentageString, barPercentage }) => {
  return (
    <>
      { barPercentage < 25 && <div className={styles.statsBarColorRed} style={{ width: barPercentageString }}/> }
      { barPercentage < 50 && barPercentage >= 25 && <div className={styles.statsBarColorOrange} style={{ width: barPercentageString }}/> }
      { barPercentage < 75 && barPercentage >= 50 && <div className={styles.statsBarColorYellow} style={{ width: barPercentageString }}/> }
      { barPercentage >= 75 && <div className={styles.statsBarColorGreen} style={{ width: barPercentageString }}/> }
    </>
  )
}
