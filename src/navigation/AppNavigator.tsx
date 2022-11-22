import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeStack from './HomeStack'

const { Navigator, Screen } = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="HomeStack" component={HomeStack} />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
