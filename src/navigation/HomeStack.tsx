import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ArtworkDetailScreen, HomeScreen } from '@/screens'
import { Color } from '@/utils'
import { RootStackParamList } from './interfaces/navigation'

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

const HomeStack = () => (
  <Navigator
    screenOptions={{
      headerBackTitle: ' ',
      presentation: 'modal',
    }}
  >
    <Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: 'Movak',
      }}
    />
    <Screen
      name="ArtworkDetail"
      component={ArtworkDetailScreen}
      options={{
        headerTransparent: true,
        headerTintColor: Color.WHITE,
        headerTitle: ' ',
      }}
    />
  </Navigator>
)

export default HomeStack
