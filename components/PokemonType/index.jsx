import styles from './styles.module.css'

const types = {
  normal: styles.normal,
  fire: styles.fire,
  water: styles.water,
  grass: styles.grass,
  electic: styles.electric,
  psychic: styles.psychic,
  ice: styles.ice,
  dragon: styles.dragon,
  dark: styles.dark,
  fairy: styles.fairy,
  fighting: styles.fighting,
  flying: styles.flying,
  poison: styles.poison,
  ground: styles.ground,
  rock: styles.rock,
  bug: styles.bug,
  ghost: styles.ghost,
  steel: styles.steel
}

export const PokemonType = ({ type }) => {
  if (Object.keys(types).includes(type)) {
    return (
    <p className={`${types[type]} ${styles.type}`}>{type}</p>
    )
  }
}
