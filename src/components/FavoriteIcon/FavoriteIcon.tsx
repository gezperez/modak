import React, { FC } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { FormattedArtwork } from '@/interfaces/artwork'
import { useStore } from '@/store'
import active from '../../assets/images/active.png'
import inactive from '../../assets/images/inactive.png'
import styles from './styles'

type FavoriteIconProps = {
  artwork: FormattedArtwork
}

const FavoriteIcon: FC<FavoriteIconProps> = ({ artwork }) => {
  const { artworkStore } = useStore()

  const icon = artwork.favorite ? active : inactive

  return (
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={() => artworkStore.setFavorite(artwork?.id, !artwork.favorite)}
    >
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  )
}

export default FavoriteIcon
