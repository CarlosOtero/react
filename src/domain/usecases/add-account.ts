import { AccountModel } from '@/domain/models'

export interface IAddAccount {
  add: (parans: IAddAccount.Params) => Promise<IAddAccount.Model>
}

export namespace IAddAccount {
  export type Params = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }

  export type Model = AccountModel
}
