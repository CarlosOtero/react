import { ISetStorage } from '@/data/protocols/cache/set-storage'
import { UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'
import { IUpdateCurrentAccount } from '@/domain/usecases/update-current-account'

export class LocalUpdateCurrentAccount implements IUpdateCurrentAccount {
  constructor (private readonly setStorqge: ISetStorage) {}
  async save (account: AccountModel): Promise<void> {
    if (!account?.accessToken) {
      throw new UnexpectedError()
    }
    this.setStorqge.set('account', JSON.stringify(account))
  }
}
