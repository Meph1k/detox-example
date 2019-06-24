import React from 'react';
import View from 'src/components/view';
import Text from 'src/components/text';
import { colors, fontSize, spacing } from 'src/styles';

const DrawerMenu = () => (
  <View
    useSafeArea
    backgroundColor={colors.borderPrimary}
    flex={1}
    testID="drawer-menu"
  >
    <View
      paddingTop={spacing.s8}
    >
      <Text fontSize={fontSize.fs4} color={colors.textPrimary}>
        Option number one
      </Text>
      <Text fontSize={fontSize.fs4} color={colors.textPrimary}>
        Option number two
      </Text>
    </View>
  </View>
)

export default DrawerMenu
