import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useStore } from '@/store'

const useFetchArtworks = () => {
  const store = useStore()

  const { initialized } = store

  useFocusEffect(
    useCallback(() => {
      if (initialized) {
        store.artworkStore.setArtworks()
      }
    }, [store.artworkStore, initialized])
  )
}

export default useFetchArtworks
