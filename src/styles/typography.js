export const fontSize = {
  fs1: 10,
  fs2: 12,
  fs3: 14,
  fs4: 16,
  fs5: 18,
  fs6: 20,
  fs7: 22,
  fs8: 24,
  fs9: 26,
  fs10: 28,
  fs11: 30,
}

export const fontFamily = {
  ffbl: 'Inter-Black',
  ffb: 'Inter-Bold',
  ffeb: 'Inter-ExtraBold',
  ffel: 'Inter-ExtraLightBETA',
  ffm: 'Inter-Medium',
  ffr: 'Inter-Regular',
  ffsb: 'Inter-SemiBold',
  fft: 'Inter-ThinBETA',
}

// We may want to predefine commonly used styles
export const textStyle = {
  header: {
    fontFamily: fontFamily.ffr,
    fontSize: fontSize.fs5,
    lineHeight: 27,
  },
  subheader: {
    fontFamily: fontFamily.ffr,
    fontSize: fontSize.fs4,
    lineHeight: 36,
  },
}
