import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import View from 'src/components/view';
import Text from 'src/components/text';
import { spacing, colors, fontSize } from 'src/styles';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

const HiddenDevMenu = () => {
  const handleClose = () => {
    Actions.pop()
  }

  return (
    <View
      {...StyleSheet.absoluteFill}
      backgroundColor="rgba(0, 0, 0, 0.8)"
      testID="hidden-dev-menu"
    >
      <View
        position="absolute"
        bottom={spacing.s4}
        left={spacing.s4}
      >
        <Text
          fontSize={fontSize.fs4}
        >
           - Change API url
        </Text>
        <Text
          fontSize={fontSize.fs4}
        >
          - Highlight all good answers
        </Text>
        <Text
          fontSize={fontSize.fs4}
        >
          - Pretype all capitals
        </Text>
        <View paddingTop={spacing.s4}>
          <TouchableWithoutFeedback onPress={handleClose} testID="hidden-dev-menu-close-button">
            <Text fontSize={fontSize.fs4}>
              Close
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, null)(HiddenDevMenu)
