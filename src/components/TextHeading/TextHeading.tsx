import React, { FC } from 'react'
import { StyleProp, Text, TextProps, ViewStyle } from 'react-native'
import { Color, Typography, TypographyVariant } from '@/utils'
import styles from './styles'

type TextHeadingProps = {
  alignCenter?: boolean
  uppercase?: boolean
  color?: Color
  style?: StyleProp<ViewStyle>
  numberOfLines?: number
  type?: Typography
} & TextProps

const getFontStyle = (type?: Typography) => {
  if (type) {
    return TypographyVariant[type]
  }

  return TypographyVariant.body
}

const TextHeading: FC<TextHeadingProps> = ({ alignCenter, children, style, uppercase, color, numberOfLines, type }) => {
  return (
    <Text
      accessibilityLabel={`TXT-${children}`}
      style={[
        getFontStyle(type),
        !!uppercase && styles.uppercase,
        !!alignCenter && styles.alignCenter,
        style,
        color && { color },
        numberOfLines === 1 && styles.oneLineFlex,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  )
}

export default TextHeading
