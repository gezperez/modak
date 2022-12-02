import React, { FC } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { FadeInSlideUpView, FavoriteIcon, TextHeading } from '@/components'
import { FormattedArtwork } from '@/interfaces/artwork'
import { Typography } from '@/utils'
import styles from './styles'

type ArtworkItemProps = {
  item: FormattedArtwork
  onPress: (item: FormattedArtwork) => void
  index: number
}

const ArtworkItem: FC<ArtworkItemProps> = ({ item, onPress, index }) => {
  const { title, imageUrl, department_title, artist_title } = item

  return (
    <FadeInSlideUpView index={index}>
      <TouchableOpacity style={styles.container} onPress={() => onPress(item)} accessibilityLabel="BTN-artwork-detail">
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.rightContainer}>
          <TextHeading type={Typography.TITLE} numberOfLines={1}>
            {title}
          </TextHeading>
          <TextHeading type={Typography.BODY_TITLE} numberOfLines={1}>
            {artist_title}
          </TextHeading>
          <View>
            <TextHeading numberOfLines={1}>{department_title}</TextHeading>
            <FavoriteIcon artwork={item} />
          </View>
        </View>
      </TouchableOpacity>
    </FadeInSlideUpView>
  )
}

export default ArtworkItem
