import { configureStore } from '@reduxjs/toolkit'
import homePokemonReducer from './reducers/homePokemonReducer'

const store = configureStore({
  reducer: {
    homePokemon: homePokemonReducer
  }
})

export default store
