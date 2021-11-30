import { AccountModel } from '@/domain/models'

export type AuthenticationParams = {
  email: string
  password: string
}

export interface IAuthentication {
  auth: (parans: AuthenticationParams) => Promise<AccountModel>

}
