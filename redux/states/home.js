import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pokemons: [],
  infiniteScrollVisorPosition: 0,
  savedScrollPosition: 0,
  numPokemons: 0
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    addPokemons: (state, action) => {
      state.pokemons = [...state.pokemons, ...action.payload]
    },
    saveScrollPosition: (state, action) => {
      state.savedScrollPosition = action.payload
    },
    saveNextInfiniteScrollVisorPosition: (state, action) => {
      state.infiniteScrollVisorPosition = action.payload
    },
    saveNextLimitNumberPokemons: (state, action) => {
      state.numPokemons = action.payload
    }
  }
})

export const { addPokemons, saveScrollPosition, saveNextInfiniteScrollVisorPosition, saveNextLimitNumberPokemons } = homeSlice.actions
export default homeSlice.reducer
