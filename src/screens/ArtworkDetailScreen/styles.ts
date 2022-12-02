import { Dimensions, StyleSheet } from 'react-native'
import { Color } from '@/utils'

const HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
  image: {
    height: HEIGHT / 2,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    overflow: 'hidden',
  },
  innerContainer: {
    margin: 20,
    padding: 16,
    backgroundColor: Color.WHITE,
    borderRadius: 12,
  },
  bodyTitle: {
    marginVertical: 20,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
  },
  icon: {
    width: 30,
    height: 30,
  },
})

export default styles
