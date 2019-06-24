import { SET_DIFFICULTY_LEVEL, REMOVE_QUESTION, RESET_QUESTIONS } from 'src/store/actions'
import { countries } from 'src/utils/countries'
import { initialState } from 'src/store/initial-state'

export function questionsReducer(state = initialState.questions, action) {
  switch (action.type) {
    case SET_DIFFICULTY_LEVEL:
      return {
        ...state,
        difficultyLevel: action.payload,
        subGroup: countries[action.payload],
      };
    case REMOVE_QUESTION:
      return {
        ...state,
        subGroup: state.subGroup.filter(country => (
          country.name !== action.payload
        ))
      }
    case RESET_QUESTIONS:
      return {
        ...state,
        subGroup: countries[state.difficultyLevel],
      }
    default:
      return state
  }
}
