import { SurveyModel } from '../models'
import faker from 'faker'

export const mockSureyModel = (): SurveyModel => ({
  id: faker.datatype.uuid(),
  question: faker.random.words(10),
  answers: [{
    answer: faker.random.words(4),
    image: faker.internet.url()
  },{
    answer: faker.random.words(5)
  }],
  didAnswer: faker.datatype.boolean(),
  date: faker.date.recent()
})

export const mockSureyListModel = (): SurveyModel[] => ([
  mockSureyModel(),
  mockSureyModel(),
  mockSureyModel()
])
