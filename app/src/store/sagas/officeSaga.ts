import { all, call, put, takeLatest } from 'typed-redux-saga'

import {
  POST_OFFICE_REQUEST,
  postOfficeFailure,
  postOfficeSuccess,
} from '../actions/officeAction'
import {
  IOffice,
  PostOfficePayload,
  PostOfficeRequest,
} from '../models/officeModel'
import { apiInstance, baseURL } from '.'

const path = '/clients'

const postOffice = (payload: PostOfficePayload) => apiInstance.post<IOffice>(`${baseURL}${path}`, payload)

function* postOfficeSaga(action: PostOfficeRequest) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = yield* call(postOffice, action.payload)
    if (response.status !== 200) {
      postOfficeFailure({ error: response.statusText })
    }
    yield* put(postOfficeSuccess())
  } catch (e: any) {
    yield* put(
      postOfficeFailure({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        error: e.message,
      })
    )
  }
}

function* officeSaga() {
  yield* all([
    takeLatest(POST_OFFICE_REQUEST, postOfficeSaga),
  ])
}

export default officeSaga
