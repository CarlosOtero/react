export enum HttpStatusCode {
  noContent = 404,
  unauthorized = 401
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
