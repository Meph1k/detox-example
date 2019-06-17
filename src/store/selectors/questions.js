import shuffle from 'lodash/shuffle'
import { countries } from 'src/utils/countries'

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export const getHints = state => {
  return shuffle(state.questions.subGroup.flatMap(question => (
    question.hints.map(hint => ({
      hint,
      country: question.name,
    }))
  )))
}

export const getAnswers = (state, currentCountry) => {
  const answers = [currentCountry];

  while (answers.length < 4) {
    const randomIndex = Math.floor(getRandomArbitrary(0, countries[state.questions.difficultyLevel].length))

    if (!answers.includes(countries[state.questions.difficultyLevel][randomIndex].name)) {
      answers.push(countries[state.questions.difficultyLevel][randomIndex].name)
    }
  }

  return shuffle(answers)
}

export const getAnswersForCapitals = (state, currentCountry) => {
  const answers = [currentCountry];

  while (answers.length < 4) {
    const randomIndex = Math.floor(getRandomArbitrary(0, countries[state.questions.difficultyLevel].length))

    if (!answers.includes(countries[state.questions.difficultyLevel][randomIndex].capital)) {
      answers.push(countries[state.questions.difficultyLevel][randomIndex].capital)
    }
  }

  return shuffle(answers)
}
