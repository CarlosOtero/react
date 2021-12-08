import { IGetStorage } from '@/data/protocols/cache'
import { HttpGetParams, HttpResponse, IHttpGetClient } from '@/data/protocols/http'

export class AuthorizeHttpGetClientDecorator implements IHttpGetClient {
  constructor (private readonly getStorage: IGetStorage) {}
  async get (params: HttpGetParams): Promise<HttpResponse> {
    this.getStorage.get('account')
    return null
  }
}
