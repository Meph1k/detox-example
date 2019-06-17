import { REMOVE_QUESTION } from 'src/store/actions';

export const removeQuestion = hint => ({
  type: REMOVE_QUESTION,
  payload: hint,
})
