import { HttpResponse } from '.'

export type HttpPostParams = {
  url: string
  body?: any
}

export interface IHttpPostClient<R = any> {
  post: (params: HttpPostParams) => Promise<HttpResponse<R>>
}
