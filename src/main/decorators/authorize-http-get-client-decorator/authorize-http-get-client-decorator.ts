import { IGetStorage } from '@/data/protocols/cache'
import { HttpGetParams, HttpResponse, IHttpGetClient } from '@/data/protocols/http'

export class AuthorizeHttpGetClientDecorator implements IHttpGetClient {
  constructor (
    private readonly getStorage: IGetStorage,
    private readonly httpGetClient: IHttpGetClient
  ) {}

  async get (params: HttpGetParams): Promise<HttpResponse> {
    const account = this.getStorage.get('account')
    if (account?.accessToken) {
      Object.assign(params, {
        headers: Object.assign(params.headers || {}, {
          'x-access-token': account.accessToken
        })
      })
    }
    const httpResponse = await this.httpGetClient.get(params)
    return httpResponse
  }
}
