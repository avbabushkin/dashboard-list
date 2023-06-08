export interface IResponseData<T = {}> {
  resultCode: number
  messages: string[]
  data: T
}
