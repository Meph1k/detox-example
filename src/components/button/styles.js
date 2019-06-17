import { StyleSheet } from 'react-native'
import * as styles from 'src/styles'

export const primary = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: styles.colors.primary,
    borderRadius: styles.br25,
    height: styles.spacing.s10,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  disabledContainer: {
    backgroundColor: styles.colors.backgroundPrimary,
  },
  disabledLabel: {
    color: styles.colors.textSecondary,
  },
  label: {
    // fontFamily: styles.fontFamily.ffb,
    fontSize: styles.fontSize.fs4,
  },
  touchable: {
    ...styles.shadows.shadow1,
    borderRadius: styles.br25,
    shadowColor: styles.colors.transparent,
  },
})
