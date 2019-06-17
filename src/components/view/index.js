import React from 'react'
import {
  View as RNView,
  SafeAreaView,
} from 'react-native'
import PropTypes from 'prop-types'
import { computeStyleProps } from './utils/view-style-methods'

const View = (props) => {
  const { useSafeArea } = props
  const Cmp = useSafeArea ? SafeAreaView : RNView

  return (
    <Cmp
      {...props}
      {...computeStyleProps(props)}
    />
  )
}

// this is needed for Animated.createAnimatedComponent(View)
export class ViewAsClass extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <View {...this.props} />
    )
  }
}

View.propTypes = {
  useSafeArea: PropTypes.bool,
}

export default View
