import React from 'react';
import { TouchableOpacity } from 'react-native';
import View from 'src/components/view';
import Text from 'src/components/text';
import { spacing, colors, fontSize } from 'src/styles'

const CountryTile = ({ name, onPress, testID }) => (
  <TouchableOpacity onPress={onPress} testID={testID}>
    <View
      width={130}
      height={130}
      alignItems="center"
      justifyContent="center"
      borderWidth={1}
      borderColor={colors.primary}
      margin={spacing.s4}
      borderRadius={2}
    >
      <Text
        color={colors.textPrimary}
        fontSize={fontSize.fs5}
      >
        {name}
      </Text>
    </View>
  </TouchableOpacity>
)

export default CountryTile
