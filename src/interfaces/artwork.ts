export interface Artwork {
  id: string
  department_title: string
  place_of_origin: string
  image_id: string
  artist_title: string
  title: string
  artist_display: string
}

export interface FormattedArtwork extends Artwork {
  imageUrl: string
  favorite: boolean
}
