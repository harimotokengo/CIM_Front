import { all, call, put, takeLatest } from 'typed-redux-saga'

import { FETCH_ME, LOGIN_REQUEST, loginFailure, loginSuccess } from '../actions/sessionAction'
import { IUser, LoginPayload, LoginRequest } from '../models/sessionModel'
import { apiInstance, baseURL } from '.'

const loginPath = '/login'
const mePath = '/me'

const login = (payload: LoginPayload) => apiInstance.post<IUser>(`${baseURL}${loginPath}`, payload.user)
const fetchMe = () => apiInstance.get<IUser>(`${baseURL}${mePath}`)

function* loginSaga(action: LoginRequest) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = yield* call(login, action.payload)
    if (response.status !== 200) {
      loginFailure({ error: response.statusText })
    }
    yield* put(loginSuccess({ user: { id: response.data.id!, email: response.data.email } }))
  } catch (e: any) {
    yield* put(
      loginFailure({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        error: e.message,
      })
    )
  }
}

function* fetchMeSaga() {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = yield* call(fetchMe)
    if (response.status !== 200) {
      loginFailure({ error: response.statusText })
    }
    yield* put(loginSuccess({ user: { id: response.data.id!, email: response.data.email } }))
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
  yield* all([takeLatest(LOGIN_REQUEST, loginSaga), takeLatest(FETCH_ME, fetchMeSaga)])
}

export default sessionSaga
