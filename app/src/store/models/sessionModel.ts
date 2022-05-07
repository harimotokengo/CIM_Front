import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../actions/sessionAction'

export interface SessionState {
  pending: boolean
  error: string | null
}

export interface IUser {
  email: string
  password: string
}

export interface LoginPayload {
  user: IUser
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
}

export type LoginFailure = {
  type: typeof LOGIN_FAILURE
  payload: LoginFailurePayload
}

export type SessionActions =
  | LoginRequest
  | LoginSuccess
  | LoginFailure

