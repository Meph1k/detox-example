import { TOGGLE_HIDDEN_MENU } from 'src/store/actions'
import { initialState } from 'src/store/initial-state'

export function hiddenMenuReducer(state = initialState.hiddenMenu, action) {
  switch (action.type) {
    case TOGGLE_HIDDEN_MENU:
      return {
        ...state,
        isShown: !state.isShown,
      };
    default:
      return state
  }
}
