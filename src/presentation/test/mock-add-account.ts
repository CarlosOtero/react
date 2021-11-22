import { AddAccountParams, IAddAccount } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

export class AddAccountSpy implements IAddAccount {
  account = mockAccountModel()
  params: AddAccountParams
  //
  async add (params: AddAccountParams): Promise<AccountModel> {
    this.params = params
    return this.account
  }
}
