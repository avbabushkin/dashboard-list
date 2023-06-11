export interface ICurrentSessionData {
  email: string
  password: string
  rememberMe: boolean
}

export interface ICreateSessionData {
  userId: number
}

export interface IDeleteSession {
  resultCode: number
  messages: string[]
  data: {}
}