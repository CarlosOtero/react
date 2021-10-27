import { AxiosHttpClient } from './axios-http-client'
import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mokedAxios = axios as jest.Mocked<typeof axios>
const mokedAxiosResult = {
  data: faker.random.objectElement(),
  status: faker.datatype.number()
}

mokedAxios.post.mockResolvedValue(mokedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mokedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})

describe('AxiosHttpClient', () => {
  test('Should return correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mokedAxiosResult.status,
      body: mokedAxiosResult.data
    })
  })
})
