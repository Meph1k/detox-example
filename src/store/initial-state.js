import { easyCountries } from 'src/utils/countries'

export const initialState = {
  questions: {
    difficultyLevel: 'easy',
    subGroup: easyCountries,
  },
  results: {
    points: 0,
  },
}
