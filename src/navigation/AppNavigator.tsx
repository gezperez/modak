import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'
import HomeStack from './HomeStack'

const { Navigator, Screen } = createNativeStackNavigator()

const AppNavigator = () => {
  const store = useStore()

  useEffect(() => {
    store.init()
  }, [store])

  return (
    <>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="HomeStack" component={HomeStack} />
        </Navigator>
      </NavigationContainer>
    </>
  )
}

export default observer(AppNavigator)
