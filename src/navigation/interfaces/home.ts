import { RouteProp } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from './navigation'

export type HomeStackParamList = {
  Home: {
    id: string
  }
}

export type HomeScreenProps = {
  route: RouteProp<RootStackParamList, 'Home'>
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
}
