import React from 'react';
import View from 'src/components/view';
import Text from 'src/components/text';
import { spacing, colors, fontSize } from 'src/styles';
import { Actions } from 'react-native-router-flux';
import Button from 'src/components/button';

const ChoiceOfGame = () => {
  return (
    <View>
      <View>
        <Text
          color={colors.textPrimary}
          fontSize={fontSize.fs6}
          centered
          style={{
            padding: spacing.s4,
          }}
        >
          Choose your game
        </Text>
      </View>
      <View
        marginHorizontal={spacing.s8}
      >
        <Button
          label="Countries"
          onPress={() => Actions.push('_question')}
          customStyles={{
            container: {
              backgroundColor: colors.malachite,
            },
          }}
          testID="countries-button"
        />
        <Button
          label="Capitals"
          onPress={() => Actions.push('_capitals')}
          marginVertical={spacing.s4}
          testID="capitals-button"
        />
      </View>
    </View>
  )
}

export default ChoiceOfGame
