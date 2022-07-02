import Head from 'next/head'
import { PokemonCard } from '../components/PokemonCard/index'
import { ScreenContainer } from '../components/ScreenContainer/index'
import styles from '../styles/home.module.css'
import { useState } from 'react'

const Home = ({ pokemons }) => {
  const [pokemon, setPokemon] = useState(pokemons)
  const [numPokemons, setNumPokemons] = useState(40)
  const [scroll, setScroll] = useState(200)
  const apiUrl = `http://localhost:3000/api/pokemon/scroll/${numPokemons}`

  const getNextPokemons = () => {
    fetch(`${apiUrl}`)
      .then(res => res.json())
      .then(data => {
        setPokemon([...pokemon, ...data.pokemonList])
        setNumPokemons(numPokemons + 40)
      })
      .catch(e => {
      })
  }

  const handleScroll = (e) => {
    if (e.target.scrollTop > scroll) {
      getNextPokemons()
      setScroll(scroll += 570)
    }
  }

  return (
    <>
      <Head>
        <title>Kyubidex</title>
        <meta name="description" content="Pokedex to learn NextJS" />
      </Head>
      <ScreenContainer>
        <div className={styles.container} onScroll={handleScroll}>
        { pokemon.map((pokemon) => {
          return <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} spriteUrl={pokemon.sprite}/>
        }) }
        </div>
      </ScreenContainer>
    </>
  )
}

export async function getServerSideProps () {
  const data = await fetch('http://localhost:3000/api/pokemon/all')
  const pokemons = await data.json()
  return {
    props: {
      pokemons: pokemons.pokemonList
    }
  }
}

export default Home
