import { ISetStorage } from '@/data/protocols/cache/set-storage'
import { UnexpectedError } from '@/domain/errors'
import { ISaveAccessToken } from '@/domain/usecases/save-access-token'

export class LocalSaveAccessToken implements ISaveAccessToken {
  constructor (private readonly setStorqge: ISetStorage) {}
  async save (accessToken: string): Promise<void> {
    if (!accessToken) {
      throw new UnexpectedError()
    }
    await this.setStorqge.set('accessToken', accessToken)
  }
}
