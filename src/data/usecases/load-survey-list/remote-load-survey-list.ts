import { HttpStatusCode, IHttpGetClient } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'
import { ILoadSurveyList } from '@/domain/usecases'

export class RemoteLoadSurveyList implements ILoadSurveyList {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: IHttpGetClient<RemoteLoadSurveyList.Model[]>
  ) {}

  async loadAll (): Promise<ILoadSurveyList.Model[]> {
    const httpResponse = await this.httpGetClient.get({ url: this.url })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.noContent: return []
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadSurveyList {
  export type Model = ILoadSurveyList.Model
}
