import { AuthenticationParams, IAuthentication } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

export class AuthenticationSpy implements IAuthentication {
  account = mockAccountModel()
  params: AuthenticationParams
  callsCount = 0
  //
  async auth (params: AuthenticationParams): Promise<AccountModel> {
    this.params = params
    this.callsCount++
    return Promise.resolve(this.account)
  }
}
