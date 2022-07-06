import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPokemons, saveNextInfiniteScrollVisorPosition, saveNextLimitNumberPokemons } from '../redux/states/home'
import PokemonCard from '../components/PokemonCard/index'
import { ScreenContainer } from '../components/ScreenContainer/index'
import { motion } from 'framer-motion'
import styles from '../styles/home.module.css'
import { config } from '../config/config'

let canLoad = true

const variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
}

const Home = ({ pokemons }) => {
  const dispatch = useDispatch()

  const pokemon = useSelector((state) => state.home.pokemons)
  const numPokemon = useSelector((state) => state.home.numPokemons)
  const scroll = useSelector((state) => state.home.infiniteScrollVisorPosition)
  const savedScrollPosition = useSelector((state) => state.home.savedScrollPosition)
  const container = useRef()
  const [isSearchActive, setIsSeatchActive] = useState(false)
  const [searchedPokemon, setSearchedPokemon] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    if (pokemon.length === 0) {
      dispatch(addPokemons(pokemons))
      dispatch(saveNextLimitNumberPokemons(40))
    }

    if (savedScrollPosition !== 0) {
      container.current.scrollTop = savedScrollPosition
    }
  }, [])

  const getNextPokemons = () => {
    const url = process.env.PUBLIC_URL
    const apiUrl = `${url}/api/pokemon/scroll/${numPokemon}`
    fetch(`${apiUrl}`)
      .then(res => res.json())
      .then(data => {
        dispatch(addPokemons(data.pokemonList))
        dispatch(saveNextLimitNumberPokemons(numPokemon + 40))
        canLoad = true
      })
      .catch(e => {
      })
  }

  const handleScroll = (e) => {
    if (e.target.scrollTop > scroll && canLoad === true) {
      canLoad = false
      getNextPokemons()
      dispatch(saveNextInfiniteScrollVisorPosition(scroll + 570))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = process.env.PUBLIC_URL
    const fd = Object.fromEntries(new FormData(e.target))
    const name = fd.pokemon
    const apiUrl = `${url}/api/pokemon/all/${name}`
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        if (data.pokemon !== undefined) {
          setIsSeatchActive(true)
          setSearchedPokemon(data.pokemon)
          setError(false)
          e.target.pokemon.value = ''
        } else {
          setError(true)
        }
      })
  }

  const resetPokemonClick = (e) => {
    e.preventDefault()
    setIsSeatchActive(false)
    setSearchedPokemon({})
    setError(false)
  }

  return (
    <>
      <Head>
        <title>Kyubidex</title>
        <meta name="description" content="Pokedex to learn NextJS" />
      </Head>
      <ScreenContainer>
        <div className={styles.pageContainer} ref={container} onScroll={handleScroll}>
          <div className={styles.searchPokemonFormContainer}>
            <form onSubmit={handleSubmit}>
              <input type="text" name="pokemon" placeholder="Search"/>
              <input type="submit" value="Search"/>
              <button onClick={resetPokemonClick}>Reset</button>
            </form>
            { error
              ? <motion.div
              className={styles.searchPokemonError}
              initial={variants.hidden}
              animate={variants.visible}
              exit={variants.hidden}
            >
               Pokemon not found
            </motion.div>
              : <div className={styles.searchPokemonError}/>
            }
          </div>
          <div className={styles.container} >
            { isSearchActive &&
              searchedPokemon.map((pokemon) => {
                return <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} spriteUrl={pokemon.sprite} container={container}/>
              })
            }
            { !isSearchActive &&
              pokemon.map((pokemon) => {
                return <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} spriteUrl={pokemon.sprite} container={container}/>
              })
            }
          </div>
        </div>
      </ScreenContainer>
    </>
  )
}

export async function getServerSideProps () {
  const url = config.url
  const data = await fetch(`${url}/api/pokemon/all`)
  const pokemons = await data.json()
  return {
    props: {
      pokemons: pokemons.pokemonList
    }
  }
}

export default Home
