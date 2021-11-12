import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { IAuthentication } from '@/domain/usecases'

export const makeRemoteAuthentication = (): IAuthentication => {
  return new RemoteAuthentication(makeApiUrl(), makeAxiosHttpClient())
}
 