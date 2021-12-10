import { ILoadSurveyList } from '@/domain/usecases'
import faker from 'faker'

export const mockSurveyModel = (): ILoadSurveyList.Model => ({
  id: faker.datatype.uuid(),
  question: faker.random.words(10),
  didAnswer: faker.datatype.boolean(),
  date: faker.date.recent()
})

export const mockSurveyListModel = (): ILoadSurveyList.Model[] => ([
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
])

export class LoadSurveyListSpy implements ILoadSurveyList {
  callsCount = 0
  surveys = mockSurveyListModel()

  async loadAll (): Promise<ILoadSurveyList.Model[]> {
    this.callsCount++
    return this.surveys
  }
}
