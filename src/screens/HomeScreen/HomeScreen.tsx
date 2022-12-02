import React, { useCallback } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { HomeScreenProps } from '@navigation/interfaces/home'
import { observer } from 'mobx-react-lite'
import { Container } from '@/components'
import { useFetchArtworks } from '@/hooks'
import { FormattedArtwork } from '@/interfaces/artwork'
import { useStore } from '@/store'
import { ArtworkItem } from './components'
import styles from './styles'

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  useFetchArtworks()

  const { artworkStore } = useStore()

  const { artworks, loading } = artworkStore

  const handleArtworkItemPress = useCallback(
    (artwork: FormattedArtwork) => navigation.navigate('ArtworkDetail', { paramsId: artwork.id }),
    [navigation]
  )

  const getKey = (item: FormattedArtwork) => item.id

  const renderItem = ({ item, index }: { item: FormattedArtwork; index: number }) => (
    <ArtworkItem item={item} index={index} onPress={handleArtworkItemPress} />
  )

  if (loading) {
    return <ActivityIndicator style={styles.loader} />
  }

  return (
    <Container>
      <FlatList data={artworks} renderItem={renderItem} keyExtractor={getKey} />
    </Container>
  )
}

export default observer(HomeScreen)
