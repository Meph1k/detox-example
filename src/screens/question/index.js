import React, { useState, useEffect } from 'react';
import View from 'src/components/view';
import Text from 'src/components/text';
import { spacing, colors, fontSize } from 'src/styles';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getHints, getAnswers } from 'src/store/selectors/questions';
import CountryTile from 'src/components/country-tile';
import { addPoint, removePoint } from 'src/store/action-creators/results';
import get from 'lodash/get'
import { removeQuestion, resetQuestions } from 'src/store/action-creators/questions';

const Question = ({ currentQuestion , answers, addPoint, removeQuestion, points, removePoint, resetQuestions }) => {
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(undefined)
  const [questionNumber, setQuestionNumber] = useState(0)

  useEffect(() => {
    resetQuestions();
  }, [])

  useEffect(() => {
    if ((!currentQuestion) && Actions.currentScene !== 'results') {
      Actions.push('_results');
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

  const handleClickAnswer = answer => {
    return () => {
      if (answer === currentQuestion.country) {
        setLastAnswerCorrect(true)
        addPoint()
        removeQuestion(answer)
        setQuestionNumber(questionNumber + 1)
      } else {
        setLastAnswerCorrect(false)
        removePoint()
      }
    }
  }

  let backgroundColor = 'transparent';
  if (lastAnswerCorrect === true) {
    backgroundColor = colors.malachite
  } else if (lastAnswerCorrect === false) {
    backgroundColor = colors.error
  }

  if (!currentQuestion) {
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
      <View>
        <Text
          color={colors.textPrimary}
          fontSize={fontSize.fs6}
          centered
          style={{
            padding: spacing.s4,
          }}
          testID={`question-number-${questionNumber}`}
        >
          {currentQuestion.hint}
        </Text>
      </View>
      <View
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {answers.map(answer => (
          <CountryTile
            key={answer}
            name={answer}
            onPress={handleClickAnswer(answer)}
            testID={answer === currentQuestion.country ? 'correct-answer-tile' : undefined}
          />
        ))}
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
  const hints = getHints(state)

  return {
    currentQuestion: hints[0],
    answers: getAnswers(state, get(hints, `[${0}].country`), []),
    points: state.results.points,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
