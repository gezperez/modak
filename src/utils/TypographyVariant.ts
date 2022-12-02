import { TextStyle } from 'react-native'

type TypographyStyle = {
  title: TextStyle
  bodyTitle: TextStyle
  body: TextStyle
}

const TypographyVariant: TypographyStyle = {
  title: {
    fontSize: 20,
    fontWeight: '800',
  },
  bodyTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
  },
}

export default TypographyVariant
