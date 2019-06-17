import * as styles from 'src/styles'

const spacingPropNames = [
  'margin',
  'marginEnd',
  'marginStart',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginVertical',
  'marginHorizontal',
  'padding',
  'paddingEnd',
  'paddingStart',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingVertical',
  'paddingHorizontal',
]

/**
 * Converts { margin: 's4', paddingLeft: 's1' } to { margin: 20, paddingLeft: 5 }
 * if s4 amd s1 declarations are found in styles.spacing map
 * @param props
 * @param keys
 */
const computeSpacingProps = (props, keys) => {
  const style = {}
  keys.forEach((key) => {
    if (props[key]) {
      style[key] = styles.spacing[props[key]] || props[key]
    }
  })
  return style
}

export const computeStyleProps = (props) => {
  const style = computeSpacingProps(props, spacingPropNames)

  if (props.backgroundColor) {
    style.backgroundColor = styles.colors[props.backgroundColor] || props.backgroundColor
  }

  if (props.borderColor) {
    style.borderColor = styles.colors[props.borderColor] || props.borderColor
  }

  if (props.shadow in styles.shadows) {
    Object.assign(style, styles.shadows[props.shadow])
  }

  return style
}
