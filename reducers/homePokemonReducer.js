import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemons: [],
  scrollPosition: 0,
  savedScrollPosition: 0,
  numPokemons: 0
}

export const homePokemonSlice = createSlice({
  name: 'homePokemon',
  initialState,
  reducers: {
    addPokemons: (state, action) => {
      state.pokemons = [...state.pokemons, ...action.payload]
    },
    saveScrollPosition: (state, action) => {
      state.savedScrollPosition = action.payload
    },
    scrollPosition: (state, action) => {
      state.scrollPosition = action.payload
    },
    numPokemons: (state, action) => {
      state.numPokemons = action.payload
    }
  }
})

export const { addPokemons, saveScrollPosition, scrollPosition, numPokemons } = homePokemonSlice.actions
export default homePokemonSlice.reducer
