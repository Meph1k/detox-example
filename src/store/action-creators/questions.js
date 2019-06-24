import { REMOVE_QUESTION, RESET_QUESTIONS } from 'src/store/actions';

export const removeQuestion = hint => ({
  type: REMOVE_QUESTION,
  payload: hint,
})

export const resetQuestions = () => ({
  type: RESET_QUESTIONS,
})
