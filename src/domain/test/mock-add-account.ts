import { IAddAccount } from '@/domain/usecases'
import { mockAccountModel } from '@/domain/test'

import faker from 'faker'

export const mockAddAccountParams = (): IAddAccount.Params => {
  const password = faker.internet.password()
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: password,
    passwordConfirmation: password
  }
}

export const mockAddAccountModel = (): IAddAccount.Model => mockAccountModel()

export class AddAccountSpy implements IAddAccount {
  account = mockAddAccountModel()
  params: IAddAccount.Params
  callsCount = 0
  //
  async add (params: IAddAccount.Params): Promise<IAddAccount.Model> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
