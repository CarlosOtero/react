import { AxiosHttpClient } from './axios-http-client'
import { mockAxios, mockHttpResponse } from '@/infra/test'
import { mockPostRequest, mockGetRequest } from '@/data/test'
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
  describe('post', () => {
    test('Should call axios.post with correct values', async () => {
      const request = mockPostRequest()
      const { sut, mokedAxios } = makeSut()
      await sut.post(request)
      expect(mokedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })

    test('Should return correct response on axios.post', () => {
      const { sut, mokedAxios } = makeSut()
      const promise = sut.post(mockPostRequest())
      expect(promise).toEqual(mokedAxios.post.mock.results[0].value)
    })

    test('Should return correct error on axios.post', () => {
      const { sut, mokedAxios } = makeSut()
      mokedAxios.post.mockRejectedValueOnce({
        response: mockHttpResponse()
      })
      const promise = sut.post(mockPostRequest())
      expect(promise).toEqual(mokedAxios.post.mock.results[0].value)
    })
  })

  describe('get', () => {
    test('Should call axios.get with correct values', async () => {
      const request = mockGetRequest()
      const { sut, mokedAxios } = makeSut()
      await sut.get(request)
      expect(mokedAxios.get).toHaveBeenCalledWith(request.url)
    })
  })
})
