import Artwork from '@interfaces'
import axios from 'axios'

const api = {
  fetchArtworks: async (): Promise<Artwork[]> => {
    const { data } = await axios.get('https://api.artic.edu/api/v1/artworks')

    return data?.data
  },
}

export default api
