import { SurveyModel } from '@/domain/models'

export interface ILoadSureyList {
  loadAll: () => Promise<SurveyModel[]>
}
