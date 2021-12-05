import { AccountModel } from '@/domain/models'
import { IUpdateCurrentAccount } from '@/domain/usecases/update-current-account'

export class UpdateCurrentAccountMock implements IUpdateCurrentAccount {
  account: AccountModel

  async save (account: AccountModel): Promise<void> {
    this.account = account
  }
}
