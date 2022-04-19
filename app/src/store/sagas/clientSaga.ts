import axios from 'axios'
import { all, call, put, takeLatest } from 'typed-redux-saga'

import {
  FETCH_CLIENT_REQUEST,
  fetchClientFailure,
  fetchClientSuccess,
  POST_CLIENT_REQUEST,
  postClientFailure,
  postClientSuccess,
} from '../actions/clientAction'
import { IClient, PostClientPayload, PostClientRequest } from '../models/clientModel'
import { baseURL } from '.'

const path = '/clients'

const getClients = () => axios.get<IClient>(`${baseURL}${path}/99`)
const postClient = (payload: PostClientPayload) => axios.post<IClient>(`${baseURL}${path}`, payload)

function* fetchClientSaga() {
  try {
    const response = yield* call(getClients)
    yield* put(
      fetchClientSuccess({
        client: response.data,
      })
    )
  } catch (e: any) {
    yield* put(
      fetchClientFailure({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        error: e.message,
      })
    )
  }
}

function* postClientSaga(action: PostClientRequest) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = yield* call(postClient, action.payload)
    yield* put(postClientSuccess())
  } catch (e: any) {
    yield* put(
      postClientFailure({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        error: e.message,
      })
    )
  }
}

function* clientSaga() {
  yield* all([takeLatest(FETCH_CLIENT_REQUEST, fetchClientSaga), takeLatest(POST_CLIENT_REQUEST, postClientSaga)])
}

export default clientSaga
