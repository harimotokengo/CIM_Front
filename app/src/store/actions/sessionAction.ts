import { LoginFailure, LoginFailurePayload, LoginPayload, LoginRequest, LoginSuccess } from '../models/sessionModel'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
  type: LOGIN_REQUEST,
  payload,
})

export const loginSuccess = (): LoginSuccess => ({
  type: LOGIN_SUCCESS,
})

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  type: LOGIN_FAILURE,
  payload,
})
