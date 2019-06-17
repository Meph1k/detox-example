import { ADD_POINT, REMOVE_POINT, RESET_SCORE } from 'src/store/actions'

export const addPoint = () => ({
  type: ADD_POINT,
})

export const removePoint = () => ({
  type: REMOVE_POINT,
})

export const resetScore = () => ({
  type: RESET_SCORE,
})
