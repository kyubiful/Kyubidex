import { ScreenContainer } from '../../components/ScreenContainer/index'
import { PokemonData } from '../../components/PokemonData/index'
import { PokemonMoves } from '../../components/PokemonMoves'
import styles from '../../styles/pokemon/id.module.css'
import { PokemonStats } from '../../components/PokemonStats'
import Link from 'next/link'
import Head from 'next/head'

const pokemon = ({ pokemon }) => {
  return (
    <>
      <Head>
        <title>Kyubidex - {pokemon.name}</title>
        <meta name="description" content={`Kyubidex - ${pokemon.name}'s information`} />
      </Head>
      <ScreenContainer>
        <Link href="/">
          <a>
            <div className={styles.prevButton}>
              &lt;
            </div>
          </a>
        </Link>
        <div className={styles.container}>
          <PokemonData pokemon={pokemon}/>
          <PokemonStats stats={pokemon.stats}/>
          <PokemonMoves moves={pokemon.moves} />
        </div>
      </ScreenContainer>
    </>
  )
}

export default pokemon

export const getServerSideProps = async (context) => {
  const id = context.params.id
  const data = await fetch(`http://localhost:3000/api/pokemon/${id}`)
  const pokemon = await data.json()

  return {
    props: {
      pokemon
    }
  }
}
