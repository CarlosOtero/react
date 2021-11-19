import { AccountModel } from '@/domain/models/account-model'

export type AccountParams = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface IAddAccount {
  add: (parans: AccountParams) => Promise<AccountModel>

}
