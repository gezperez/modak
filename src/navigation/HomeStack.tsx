import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from '@screens'
import { RootStackParamList } from './interfaces/navigation'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

const HomeStack = () => (
  <Navigator>
    <Screen name="Home" component={HomeScreen} options={{}} />
  </Navigator>
)

export default HomeStack
