import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
} from 'react-native'

import View from 'src/components/view'
import Text from 'src/components/text'

import { primary as styles } from './styles'

const Button = ({
  type,
  label,
  disabled,
  activeOpacity,
  onPress,
  children,
  customStyles,
  ...viewProps
}) => (
  <View
    {...viewProps}
  >
    <TouchableOpacity
      style={[styles.touchable, customStyles && customStyles.touchable]}
      activeOpacity={activeOpacity}
      disabled={disabled}
      onPress={onPress}
    >
      <View style={[styles.container, customStyles && customStyles.container, disabled && styles.disabledContainer]}>
        {children}
        {label && <Text style={[styles.label, disabled && styles.disabledLabel]}>{label}</Text>}
      </View>
    </TouchableOpacity>
  </View>
)

Button.defaultProps = {
  type: 'primary',
  activeOpacity: 0.6,
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  activeOpacity: PropTypes.number,
  customStyles: PropTypes.shape({
    touchable: PropTypes.object,
    container: PropTypes.object,
  }),
  onPress: PropTypes.func,
}

export default Button
