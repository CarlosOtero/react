import { AccountModel } from '@/domain/models/account-model'

export type AuthenticationParans = {
  email: string
  password: string
}

export interface Authentication {
  auth (parans: AuthenticationParans): Promise<AccountModel>

}
