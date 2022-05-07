import { all, call, put, takeLatest } from 'typed-redux-saga'

import { LOGIN_REQUEST,loginFailure, loginSuccess } from '../actions/sessionAction'
import { IUser, LoginPayload, LoginRequest } from '../models/sessionModel'
import { apiInstance, baseURL } from '.'

const path = '/login'

const login = (payload: LoginPayload) => apiInstance.post<IUser>(`${baseURL}${path}`, payload.user)

function* loginSaga(action: LoginRequest) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = yield* call(login, action.payload)
    if (response.status !== 200) {
      loginFailure({ error: response.statusText })
    }
    yield* put(loginSuccess())
  } catch (e: any) {
    yield* put(
      loginFailure({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        error: e.message,
      })
    )
  }
}

function* sessionSaga() {
  yield* all([
    takeLatest(LOGIN_REQUEST, loginSaga),
  ])
}

export default sessionSaga
