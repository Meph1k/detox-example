import React from 'react'
import {
  Text as RNText,
  Platform,
} from 'react-native'
import PropTypes from 'prop-types'
import * as styles from 'src/styles'

const computeStyle = (props) => {
  const style = {}

  if (props.fontSize) {
    style.fontSize = styles.fontSize[props.fontSize] || props.fontSize
  }

  if (props.lineHeight) {
    style.lineHeight = props.lineHeight
  }

  if (props.letterSpacing) {
    style.letterSpacing = props.letterSpacing
  }

  if (props.color) {
    style.color = styles.colors[props.color] || props.color
  }

  if (props.centered) {
    style.textAlign = 'center'
  }

  // textTransform is breaking styles on Android
  // possible bug: https://github.com/facebook/react-native/issues/21966
  if (props.uppercase && Platform.OS === 'ios') {
    style.textTransform = 'uppercase'
  }

  if (props.capitalize && Platform.OS === 'ios') {
    style.textTransform = 'capitalize'
  }
  if (props.right) {
    style.textAlign = 'right'
  }

  if (!props.style) {
    return style
  }

  return props.style instanceof Array
    ? [style, ...props.style]
    : [style, props.style]
}

const Text = props => (
  <RNText
    {...props}
    style={computeStyle(props)}
  />
)

Text.propTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  lineHeight: PropTypes.number,
  letterSpacing: PropTypes.number,
  centered: PropTypes.bool,
  uppercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  right: PropTypes.bool,
}

Text.defaultProps = {
  fontSize: 12,
  color: 'white',
}

// this is needed for Animated.createAnimatedComponent(Text)
export class TextAsClass extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Text {...this.props} />
    )
  }
}

export default Text
