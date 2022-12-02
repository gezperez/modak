import React, { ReactNode, useEffect, useMemo, useRef } from 'react'
import { Animated } from 'react-native'

type Props = {
  style?: object
  children: ReactNode
  index: number
}

const FadeInSlideUpView = ({ style, children, index }: Props) => {
  const translateY = useRef(new Animated.Value(30)).current
  const opacity = useRef(new Animated.Value(0)).current
  const scaleX = useRef(new Animated.Value(0.95)).current
  const scaleY = useRef(new Animated.Value(0.95)).current

  const config = useMemo(() => {
    return {
      duration: (600 * index) / 2,
      useNativeDriver: true,
    }
  }, [index])

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, { ...config, toValue: 1 }),
      Animated.timing(scaleX, { ...config, toValue: 1 }),
      Animated.timing(scaleY, { ...config, toValue: 1 }),
      Animated.timing(translateY, {
        ...config,
        toValue: 0,
      } as any),
    ] as any).start()
  }, [config, opacity, scaleX, scaleY, translateY])

  return (
    <Animated.View
      style={{
        ...style,
        opacity,
        transform: [{ translateY }, { scaleX }, { scaleY }],
      }}
    >
      {children}
    </Animated.View>
  )
}

export default FadeInSlideUpView
