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

    test('Should return correct response on axios.post', async () => {
      const { sut, mokedAxios } = makeSut()
      const httpRespone = await sut.post(mockPostRequest())
      const axiosResponse = await mokedAxios.post.mock.results[0].value
      expect(httpRespone).toEqual({
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      })
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
      expect(mokedAxios.get).toHaveBeenCalledWith(request.url, { headers: request.headers })
    })

    test('Should return correct response on axios.get', async () => {
      const { sut, mokedAxios } = makeSut()
      const httpRespone = await sut.get(mockGetRequest())
      const axiosResponse = await mokedAxios.get.mock.results[0].value
      expect(httpRespone).toEqual({
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      })
    })

    test('Should return correct error on axios.get', () => {
      const { sut, mokedAxios } = makeSut()
      mokedAxios.get.mockRejectedValueOnce({
        response: mockHttpResponse()
      })
      const promise = sut.get(mockGetRequest())
      expect(promise).toEqual(mokedAxios.get.mock.results[0].value)
    })
  })
})
