import { IHttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { IAuthentication } from '@/domain/usecases'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'

export class RemoteAuthentication implements IAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: IHttpPostClient<RemoteAuthentication.Model>) {
  }

  async auth (params: IAuthentication.Params): Promise<IAuthentication.Model> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteAuthentication {
  export type Model = IAuthentication.Model
}
