import { configureStore } from '@reduxjs/toolkit'
import home from './states/home'

const store = configureStore({
  reducer: {
    home
  }
})

export default store
