import { ISetStorage } from '@/data/protocols/cache/set-storage'
import { LocalStorageAdapter } from '@/infra/cache/local-storage-adapter'

export const makeLocalStorageAdapter = (): ISetStorage => {
  return new LocalStorageAdapter()
}
