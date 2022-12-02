import AsyncStorage from '@react-native-async-storage/async-storage'
import { observable } from 'mobx'
import { create } from 'mobx-persist'
import { actionAsync, task } from 'mobx-utils'
import { ArtworkStore } from './ArtworkStore'

const hydrate = create({ storage: AsyncStorage, jsonify: true })

export class RootStore {
  artworkStore = new ArtworkStore(this)

  @observable
  initialized = false

  /**
   * Actions
   */

  @actionAsync
  async init(): Promise<void> {
    try {
      await task(this.hydrateStores())
    } catch (err) {
    } finally {
      this.initialized = true
    }
  }

  @actionAsync
  async hydrateStores(): Promise<void> {
    try {
      await task(Promise.all([hydrate('artwork-store', this.artworkStore)]))
    } catch (err) {}
  }
}

export const typeStore = typeof RootStore
