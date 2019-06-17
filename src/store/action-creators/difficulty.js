import { SET_DIFFICULTY_LEVEL } from 'src/store/actions';

export const setDifficultyLevel = difficulty => ({
  type: SET_DIFFICULTY_LEVEL,
  payload: difficulty,
});
