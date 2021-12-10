import { IAddAccount } from '@/domain/usecases'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'
import { HttpStatusCode, IHttpPostClient } from '@/data/protocols/http'

export class RemoteAddAccount implements IAddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient<RemoteAddAccount.Model>) {
  }

  async add (params: IAddAccount.Params): Promise<IAddAccount.Model> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteAddAccount {
  export type Model = IAddAccount.Model
}
