import { FETCH_ME, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../actions/sessionAction'

export interface SessionState {
  user: Required<Omit<IUser, 'password'>>
  pending: boolean
  error: string | null
}

export interface IUser {
  id?: number
  email: string
  password: string
}

export interface LoginPayload {
  user: IUser
}

export interface LoginSuccessPayload {
  user: Required<Omit<IUser, 'password'>>
}

export interface LoginFailurePayload {
  error: string
}

export type LoginRequest = {
  type: typeof LOGIN_REQUEST
  payload: LoginPayload
}

export type LoginSuccess = {
  type: typeof LOGIN_SUCCESS
  payload: LoginSuccessPayload
}

export type LoginFailure = {
  type: typeof LOGIN_FAILURE
  payload: LoginFailurePayload
}

export type FetchMe = {
  type: typeof FETCH_ME
}

export type SessionActions = LoginRequest | LoginSuccess | LoginFailure | FetchMe
