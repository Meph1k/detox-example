import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import View from 'src/components/view';
import Text from 'src/components/text';
import { connect } from 'react-redux';
import { spacing, colors, fontSize } from 'src/styles';
import { resetQuestions } from 'src/store/action-creators/questions';

const Back = () => (
  <TouchableWithoutFeedback
    onPress={Actions.pop}
  >
    <View
      paddingLeft={spacing.s2}
    >
      <Text
        color={colors.primary}
        fontSize={fontSize.fs4}
      >
        Go back
      </Text>
    </View>
  </TouchableWithoutFeedback>
)

const BackToChoice = ({ resetQuestions }) => {
  const goBack = () => {
    resetQuestions();
    Actions.reset('choice-of-game');
  }

  return (
    <TouchableWithoutFeedback
      onPress={goBack}
    >
      <View
        paddingLeft={spacing.s2}
      >
        <Text
          color={colors.primary}
          fontSize={fontSize.fs4}
        >
          Choose game
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const mapDispatchToProps = {
  resetQuestions,
}

export const ConnectedBackToChoice = connect(null, mapDispatchToProps)(BackToChoice)

export default Back
