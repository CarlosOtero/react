import { IAuthentication } from '@/domain/usecases'
import { mockAccountModel } from '@/domain/test'

import faker from 'faker'

export const mockAuthenticationParams = (): IAuthentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAuthenticationModel = (): IAuthentication.Model => mockAccountModel()

export class AuthenticationSpy implements IAuthentication {
  account = mockAuthenticationModel()
  params: IAuthentication.Params
  callsCount = 0
  //
  async auth (params: IAuthentication.Params): Promise<IAuthentication.Model> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
