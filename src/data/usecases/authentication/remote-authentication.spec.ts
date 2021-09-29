import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/moc-http-client'

describe('RemoteAuthentication', () => {
  test('Shoud call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
