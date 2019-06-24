import React from 'react';
import View from 'src/components/view';
import Text from 'src/components/text';
import { colors, fontSize } from 'src/styles';

const DrawerMenu = () => (
  <View
    useSafeArea
    backgroundColor={colors.borderPrimary}
    flex={1}
    testID="drawer-menu"
  >
    <Text fontSize={fontSize.fs4} color={colors.textPrimary}>
      Option number one
    </Text>
    <Text fontSize={fontSize.fs4} color={colors.textPrimary}>
      Option number two
    </Text>
  </View>
)

export default DrawerMenu
