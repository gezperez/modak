import { find, map } from 'lodash'
import { observable } from 'mobx'
import { persist } from 'mobx-persist'
import { actionAsync, computedFn, task } from 'mobx-utils'
import api from '@/api'
import { FormattedArtwork } from '@/interfaces/artwork'
import { RootStore } from './RootStore'

export class ArtworkStore {
  store: RootStore

  @persist('list') @observable artworks: FormattedArtwork[] = []

  @observable
  loading: boolean = false

  @persist @observable loaded: boolean = false

  constructor(store: RootStore) {
    this.store = store
  }

  getArtworkById = computedFn(function getCampaignById(this: ArtworkStore, paramId: string): FormattedArtwork {
    const foundArtwork = find(this.artworks, ({ id }) => id === paramId)

    if (foundArtwork) {
      return foundArtwork
    }

    return {
      title: '',
      artist_display: '',
      id: '',
      place_of_origin: '',
      imageUrl: '',
      favorite: false,
      department_title: '',
      image_id: '',
      artist_title: '',
    }
  })

  /**
   * Actions
   */

  @actionAsync
  async setArtworks() {
    if (this.loaded) {
      return
    }

    this.loading = true

    const data = await task(api.fetchArtworks())

    this.loading = false

    const formattedData: FormattedArtwork[] | undefined = data?.map(item => {
      return {
        ...item,
        imageUrl: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
        favorite: false,
      }
    })

    this.loaded = true
    this.artworks = formattedData
  }

  setFavorite(id: string, value: boolean) {
    this.artworks = map(this.artworks, item => {
      if (item.id === id) {
        return {
          ...item,
          favorite: value,
        }
      }

      return item
    })
  }
}
