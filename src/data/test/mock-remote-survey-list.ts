import { RemoteLoadSurveyList } from '@/data/usecases'
import faker from 'faker'

export const mockRemmoteSurveyModel = (): RemoteLoadSurveyList.Model => ({
  id: faker.datatype.uuid(),
  question: faker.random.words(10),
  didAnswer: faker.datatype.boolean(),
  date: faker.date.recent().toISOString()
})

export const mockRemoteSurveyListModel = (): RemoteLoadSurveyList.Model[] => ([
  mockRemmoteSurveyModel(),
  mockRemmoteSurveyModel(),
  mockRemmoteSurveyModel()
])
