import { StyleSheet } from 'react-native'
import { Color } from '@/utils'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.WHITE,
    margin: 12,
    marginVertical: 6,
    borderRadius: 10,
    shadowColor: Color.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    margin: 12,
    borderRadius: 10,
    backgroundColor: Color.GRAY,
  },
  rightContainer: {
    flex: 1,
    marginRight: 20,
  },
  text: {
    flexShrink: 1,
  },
})

export default styles
