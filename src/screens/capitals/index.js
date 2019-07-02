import React, { useState, useEffect } from 'react';
import View from 'src/components/view';
import Text from 'src/components/text';
import { TextInput } from 'react-native';
import { spacing, colors, fontSize } from 'src/styles';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getAnswersForCapitals } from 'src/store/selectors/questions';
import { addPoint, removePoint } from 'src/store/action-creators/results';
import get from 'lodash/get'
import { removeQuestion, resetQuestions } from 'src/store/action-creators/questions';
import Button from 'src/components/button';

const Question = ({ currentCountry , answers, addPoint, removeQuestion, points, removePoint, resetQuestions }) => {
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(undefined)
  const [country, setCountry] = useState('')

  useEffect(() => {
    resetQuestions();
  }, [])

  useEffect(() => {
    if ((!currentCountry) && Actions.currentScene !== 'results') {
      Actions.push('results')
    }
  })

  useEffect(() => {
    const lastAnswerTimeout = setTimeout(() => {
      setLastAnswerCorrect(undefined)
    }, 2000)

    return () => {
      clearTimeout(lastAnswerTimeout)
    }
  }, [lastAnswerCorrect])

  const handleClickAnswer = () => {
    if (country === currentCountry.capital) {
      setLastAnswerCorrect(true)
      addPoint()
      setCountry('')
    } else {
      setLastAnswerCorrect(false)
      removePoint()
    }
    removeQuestion(currentCountry.name)
  }

  let backgroundColor = 'transparent';
  if (lastAnswerCorrect === true) {
    backgroundColor = colors.malachite
  } else if (lastAnswerCorrect === false) {
    backgroundColor = colors.error
  }

  if (!currentCountry) {
    return null;
  }

  return (
    <View>
      <View
        backgroundColor={backgroundColor}
      >
        <Text
          color={colors.textPrimary}
          fontSize={fontSize.fs6}
          centered
          style={{
            padding: spacing.s4,
          }}
        >
          {lastAnswerCorrect === true && (
            'Correct!'
          )}
          {lastAnswerCorrect === false && (
            'Incorrect!'
          )}
        </Text>
      </View>
      <View
        paddingHorizontal={spacing.s4}
      >
        <View>
          <Text
            color={colors.textPrimary}
            fontSize={fontSize.fs6}
            centered
            style={{
              padding: spacing.s4,
            }}
            testID="current-country-name"
          >
            {currentCountry.name}
          </Text>
        </View>
        <TextInput
          onChangeText={setCountry}
          value={country}
          style={{
            height: 40,
            fontSize: fontSize.fs4,
          }}
          testID="capital-text-input"
          placeholder="Type country"
        />
        <Button
          label="Next capital"
          onPress={handleClickAnswer}
          marginVertical={spacing.s4}
          testID="next-capital-button"
        />
      </View>
    </View>
  )
}

const mapDispatchToProps = {
  addPoint,
  removePoint,
  removeQuestion,
  resetQuestions,
}

const mapStateToProps = state => {
  return {
    currentCountry: state.questions.subGroup[0],
    answers: getAnswersForCapitals(state, get(state.questions.subGroup, `[${0}].capital`), []),
    points: state.results.points,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
