import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import View from 'src/components/view';
import { Actions } from 'react-native-router-flux';
import Text from 'src/components/text';
import Button from 'src/components/button';
import { spacing, colors, fontSize } from 'src/styles';
import { connect } from 'react-redux';
import { setDifficultyLevel } from 'src/store/action-creators/difficulty';
import { resetScore } from 'src/store/action-creators/results';

const DifficultyLevel = ({ setDifficultyLevel, resetScore }) => {
  const [wasLongPress, setLongPress] = useState(false)
  const [pressCount, setPressCount] = useState(0)

  const moveToQuestions = difficultyLevel => {
    setDifficultyLevel(difficultyLevel)
    resetScore()
    Actions.push('choice-of-game')
  }

  const handleLongPress = () => {
    setLongPress(true)
  }

  const handlePress = () => {
    setPressCount(pressCount + 1)

    if (pressCount >= 3) {
      Actions.push('hidden-dev-menu')
    }
  }

  return (
    <View
      flex={1}
      testID="difficulty-level-screen"
    >
      <View>
        <Text
          color={colors.textPrimary}
          fontSize={fontSize.fs6}
          centered
          style={{
            padding: spacing.s4,
          }}
        >
          Choose your difficulty level
        </Text>
        <View
          marginHorizontal={spacing.s8}
        >
          <Button
            label="Easy"
            onPress={() => moveToQuestions('easy')}
            customStyles={{
              container: {
                backgroundColor: colors.malachite,
              },
            }}
            testID="easy-button"
          />
          <Button
            label="Medium"
            onPress={() => moveToQuestions('medium')}
            marginVertical={spacing.s4}
            testID="medium-button"
          />
          <Button
            label="Hard"
            onPress={() => moveToQuestions('hard')}
            customStyles={{
              container: {
                backgroundColor: colors.error,
              },
            }}
            testID="hard-button"
          />
        </View>
      </View>
      <TouchableWithoutFeedback delayLongPress={5000} onLongPress={handleLongPress} onPress={handlePress} testID="hidden-dev-menu-button">
        <View
          position="absolute"
          bottom={spacing.s4}
          right={spacing.s4}
          width={50}
          height={50}
          borderRadius={25}
          backgroundColor={colors.error}
        />
      </TouchableWithoutFeedback>
    </View>
  )
}

const mapDispatchToProps = ({
  setDifficultyLevel,
  resetScore,
})

export default connect(null, mapDispatchToProps)(DifficultyLevel)
