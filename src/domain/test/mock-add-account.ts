import { AddAccountParams, IAddAccount } from '@/domain/usecases'
import { mockAccountModel } from '@/domain/test'
import { AccountModel } from '../models/account-model'

import faker from 'faker'

export const mockAddAccountParams = (): AddAccountParams => {
  const password = faker.internet.password()
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: password,
    passwordConfirmation: password
  }
}

export class AddAccountSpy implements IAddAccount {
  account = mockAccountModel()
  params: AddAccountParams
  callsCount = 0
  //
  async add (params: AddAccountParams): Promise<AccountModel> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
