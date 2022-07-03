import Image from 'next/image'
import styles from './styles.module.css'

import { PokemonType } from '../PokemonType/index'

export const PokemonData = ({ pokemon }) => {
  return (
    <div className={styles.pokeDataContainer}>
      <p className={styles.pokeDataName}>{pokemon.name}</p>
      <div className={styles.pokeData}>
        { pokemon.sprite !== null
          ? <Image height={150} width={150} src={pokemon.sprite} layout="fixed" priority />
          : <div style={{ width: '150px', height: '150px' }}/>
        }

        <div className={styles.pokeDataContent}>
          <p className={styles.pokeDataTitles}>
            { pokemon.types.length === 1 ? 'Type' : 'Types'}
          </p>
          <div className={styles.pokeTypeContainer}>
            { pokemon.types.map((type, key) => {
              return <PokemonType key={key} type={type.type.name}/>
            })}

          </div>
          <p className={styles.pokeDataTitles}>Abilities</p>
          <div className={styles.pokeAbilitiesContainer}>
            { pokemon.abilities.map((abilitie, key) => {
              return <p key={key}>- {abilitie.ability.name}</p>
            })}
          </div>
          <p className={styles.pokeDataTitles}>Height / Weight</p>
          <div>
            <p>{pokemon.height} m / {pokemon.weight} kg</p>
          </div>
        </div>
      </div>
    </div>
  )
}
