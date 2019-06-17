import React from 'react';
import View from 'src/components/view';
import Text from 'src/components/text';
import { spacing, colors, fontSize } from 'src/styles'
import { connect } from 'react-redux';

const Question = ({ points }) => {
  return (
    <View testID="results-view">
      <Text
        color={colors.textPrimary}
        fontSize={fontSize.fs6}
        centered
        style={{
          padding: spacing.s4,
        }}
      >
        No more questions!
        Your score: {points}
      </Text>
    </View>
  )
}

const mapStateToProps = state => ({
  points: state.results.points,
})

export default connect(mapStateToProps, null)(Question)
