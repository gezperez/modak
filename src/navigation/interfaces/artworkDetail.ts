import { RouteProp } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from './navigation'

export type ArtworkDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'ArtworkDetail'>
  navigation: NativeStackNavigationProp<RootStackParamList, 'ArtworkDetail'>
}
