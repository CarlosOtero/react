import { IGetStorage } from '@/data/protocols/cache'
import { HttpGetParams, HttpResponse, IHttpGetClient } from '@/data/protocols/http'

export class AuthorizeHttpGetClientDecorator implements IHttpGetClient {
  constructor (
    private readonly getStorage: IGetStorage,
    private readonly httpGetClient: IHttpGetClient
  ) {}

  async get (params: HttpGetParams): Promise<HttpResponse> {
    this.getStorage.get('account')
    await this.httpGetClient.get(params)
    return null
  }
}
