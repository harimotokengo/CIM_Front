import {
  FetchMe,
  LoginFailure,
  LoginFailurePayload,
  LoginPayload,
  LoginRequest,
  LoginSuccess,
  LoginSuccessPayload,
} from '../models/sessionModel'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const FETCH_ME = 'FETCH_ME'

export const loginRequest = (payload: LoginPayload): LoginRequest => ({
  type: LOGIN_REQUEST,
  payload,
})

export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
  type: LOGIN_SUCCESS,
  payload,
})

export const loginFailure = (payload: LoginFailurePayload): LoginFailure => ({
  type: LOGIN_FAILURE,
  payload,
})

export const fetchMe = (): FetchMe => ({
  type: FETCH_ME,
})
