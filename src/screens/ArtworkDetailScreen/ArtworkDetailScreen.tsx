import React from 'react'
import { Image, View } from 'react-native'
import { ArtworkDetailScreenProps } from '@navigation/interfaces/artworkDetail'
import { observer } from 'mobx-react-lite'
import { Container, FavoriteIcon, TextHeading } from '@/components'
import { useStore } from '@/store'
import { Typography } from '@/utils'
import I18n from '../../i18n'
import styles from './styles'

const ArtworkDetailScreen = ({ route }: ArtworkDetailScreenProps) => {
  const { paramsId } = route.params

  const { artworkStore } = useStore()

  const artwork = artworkStore.getArtworkById(paramsId)

  const { imageUrl, title, artist_display, place_of_origin } = artwork

  return (
    <Container>
      <Image resizeMode="stretch" style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.innerContainer}>
        <TextHeading type={Typography.TITLE} alignCenter>
          {title}
        </TextHeading>
        <TextHeading style={styles.bodyTitle} type={Typography.BODY_TITLE} alignCenter>
          {`${I18n.t('artworkDetail.artist')} ${artist_display}`}
        </TextHeading>
        <View>
          <TextHeading type={Typography.BODY} alignCenter>
            {`${I18n.t('artworkDetail.origin')} ${place_of_origin}`}
          </TextHeading>
          <FavoriteIcon artwork={artwork} />
        </View>
      </View>
    </Container>
  )
}

export default observer(ArtworkDetailScreen)
