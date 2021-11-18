import { ISaveAccessToken } from '@/domain/usecases/save-access-token'

export class SaveAccessTokenMock implements ISaveAccessToken {
  accessToken: string

  async save (accessToken: string): Promise<void> {
    this.accessToken = accessToken
  }
}
