import React, { FC } from 'react'
import { View, ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Color } from '@/utils'

type ContainerProps = {
  withSafeAreaTop?: boolean
  backgroundColor?: Color
} & ViewProps

const Container: FC<ContainerProps> = ({ children, withSafeAreaTop, backgroundColor }) => {
  const insets = useSafeAreaInsets()

  return (
    <View
      style={[
        {
          paddingTop: withSafeAreaTop && insets.top,
          paddingBottom: insets.bottom,
        },
        backgroundColor && { backgroundColor },
      ]}
    >
      {children}
    </View>
  )
}

export default Container
