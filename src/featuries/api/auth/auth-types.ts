export interface ICurrentSessionData {
  id: number
  email: string
  login: string

}

export interface ICreateSessionData {
  userId: number
}

export interface IDeleteSession {
  resultCode: number
  messages: string[]
  data: {}
}