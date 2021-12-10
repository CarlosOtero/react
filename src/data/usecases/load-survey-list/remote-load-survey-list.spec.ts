import { RemoteLoadSurveyList } from './remote-load-survey-list'
import { HttpGetClientSpy, mockRemoteSurveyListModel } from '@/data/test'
import { UnexpectedError } from '@/domain/errors'
import { HttpStatusCode } from '@/data/protocols/http'
import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadSurveyList
  httpGetClientSpy: HttpGetClientSpy<RemoteLoadSurveyList.Model[]>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<RemoteLoadSurveyList.Model[]>()
  const sut = new RemoteLoadSurveyList(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteLoadSurveyList', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.loadAll()
    expect(httpGetClientSpy.url).toEqual(url)
  })

  test('Shoud throw UnexpectedError if HttpGetClient returns 403', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }
    const promise = sut.loadAll()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Shoud throw UnexpectedError if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.loadAll()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Shoud throw UnexpectedError if HttpGetClient returns 500', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.loadAll()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Shoud return a lit of ILoadSurveyList.Models if HttpGetClient return 200', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    const HttpResult = mockRemoteSurveyListModel()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: HttpResult
    }
    const surveyList = await sut.loadAll()
    expect(surveyList).toEqual([{
      id: HttpResult[0].id,
      question: HttpResult[0].question,
      didAnswer: HttpResult[0].didAnswer,
      date: new Date(HttpResult[0].date)
    }, {
      id: HttpResult[1].id,
      question: HttpResult[1].question,
      didAnswer: HttpResult[1].didAnswer,
      date: new Date(HttpResult[1].date)
    }, {
      id: HttpResult[2].id,
      question: HttpResult[2].question,
      didAnswer: HttpResult[2].didAnswer,
      date: new Date(HttpResult[2].date)
    }])
  })

  test('Shoud return an empty list if HttpGetClient return 204', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.noContent
    }
    const surveyList = await sut.loadAll()
    expect(surveyList).toEqual([])
  })
})
