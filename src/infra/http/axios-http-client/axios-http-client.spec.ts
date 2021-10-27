import { AxiosHttpClient } from './axios-http-client'
import { mockAxios } from '@/infra/test'
import { mockPostRequest } from '@/data/test'
import axios from 'axios'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mokedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mokedAxios = mockAxios()
  return {
    sut,
    mokedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mokedAxios } = makeSut()
    await sut.post(request)
    expect(mokedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})

describe('AxiosHttpClient', () => {
  test('Should return correct statusCode and body', () => {
    const { sut, mokedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mokedAxios.post.mock.results[0].value)
  })
})
