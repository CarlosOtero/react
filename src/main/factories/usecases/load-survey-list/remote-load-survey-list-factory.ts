import { makeApiUrl } from '@/main/factories/http'
import { makeAuthorizeHttpGetClientDecorator } from '@/main/factories/decorators'
import { ILoadSurveyList } from '@/domain/usecases'
import { RemoteLoadSurveyList } from '@/data/usecases'

export const makeRemoteLoadSurveyList = (): ILoadSurveyList => {
  return new RemoteLoadSurveyList(makeApiUrl('/surveys'), makeAuthorizeHttpGetClientDecorator())
}
