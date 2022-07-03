import Head from 'next/head'
import PokemonCardLazy from '../components/PokemonCard/PokemonCardLazy'
import styles from '../styles/home.module.css'
import { addPokemons, scrollPosition, numPokemons } from '../reducers/homePokemonReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import ScreenContainer from '../components/ScreenContainer'

let canLoad = true

const Home = ({ pokemons }) => {
  const dispatch = useDispatch()

  const pokemon = useSelector((state) => state.homePokemon.pokemons)
  const numPokemon = useSelector((state) => state.homePokemon.numPokemons)
  const scroll = useSelector((state) => state.homePokemon.scrollPosition)
  const savedScrollPosition = useSelector((state) => state.homePokemon.savedScrollPosition)
  const container = useRef()

  useEffect(() => {
    if (pokemon.length === 0) {
      dispatch(addPokemons(pokemons))
      dispatch(numPokemons(40))
    }

    if (savedScrollPosition !== 0) {
      container.current.scrollTop = savedScrollPosition
    }
  }, [])

  const getNextPokemons = () => {
    const apiUrl = `http://localhost:3000/api/pokemon/scroll/${numPokemon}`
    fetch(`${apiUrl}`)
      .then(res => res.json())
      .then(data => {
        dispatch(addPokemons(data.pokemonList))
        dispatch(numPokemons(numPokemon + 40))
        canLoad = true
      })
      .catch(e => {
      })
  }

  const handleScroll = (e) => {
    if (e.target.scrollTop > scroll && canLoad === true) {
      canLoad = false
      getNextPokemons()
      dispatch(scrollPosition(scroll + 570))
    }
  }

  return (
    <>
      <Head>
        <title>Kyubidex</title>
        <meta name="description" content="Pokedex to learn NextJS" />
      </Head>
      <ScreenContainer>
        <div className={styles.container} onScroll={handleScroll} ref={container}>
          {
            pokemon.map((pokemon) => {
              return <PokemonCardLazy key={pokemon.id} id={pokemon.id} name={pokemon.name} spriteUrl={pokemon.sprite} container={container}/>
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
