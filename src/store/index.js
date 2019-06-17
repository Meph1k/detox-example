import { createStore } from 'redux'

import rootReducer from 'src/store/reducers'

const configureStore = (preloadedState) => {
  return createStore(
    rootReducer,
    preloadedState,
  )
}

export const store = configureStore()
