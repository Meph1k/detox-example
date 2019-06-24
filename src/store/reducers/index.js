import { combineReducers } from 'redux';
import { questionsReducer } from 'src/store/reducers/questions-reducer';
import { resultsReducer } from 'src/store/reducers/results-reducer';
import { hiddenMenuReducer } from 'src/store/reducers/hidden-menu-reducer';

const combinedReducers = combineReducers({
  questions: questionsReducer,
  results: resultsReducer,
  hiddenMenu: hiddenMenuReducer,
});

const rootReducer = (state, action) => {
  return combinedReducers(state, action);
};

export default rootReducer;
