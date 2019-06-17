import { ADD_POINT, REMOVE_POINT, RESET_SCORE } from 'src/store/actions'
import { initialState } from 'src/store/initial-state'

export function resultsReducer(state = initialState.results, action) {
  switch (action.type) {
    case ADD_POINT:
      return {
        ...state,
        points: state.points + 1,
      };
    case REMOVE_POINT:
      return {
        ...state,
        points: state.points - 1,
      };
    case RESET_SCORE:
      return {
        ...state,
        points: 0,
      }
    default:
      return state
  }
}
