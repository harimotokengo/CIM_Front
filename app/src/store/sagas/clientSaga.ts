import axios from 'axios'
import { all, call, put, takeLatest } from 'typed-redux-saga'

import {
  FETCH_CLIENT_REQUEST,
  fetchClientFailure,
  fetchClientSuccess,
  PATCH_CLIENT_REQUEST,
  patchClientFailure,
  patchClientSuccess,
  POST_CLIENT_REQUEST,
  postClientFailure,
  postClientSuccess,
} from '../actions/clientAction'
import {
  IClient,
  PatchClientPayload,
  PatchClientRequest,
  PostClientPayload,
  PostClientRequest,
} from '../models/clientModel'
import { baseURL } from '.'

const path = '/clients'

const getClients = () => axios.get<IClient>(`${baseURL}${path}/105`)
const postClient = (payload: PostClientPayload) => axios.post<IClient>(`${baseURL}${path}`, payload)
const patchClient = (payload: PatchClientPayload) =>
  axios.patch<IClient>(`${baseURL}${path}/${payload.client.id!}`, payload)

function* fetchClientSaga() {
  try {
    const response = yield* call(getClients)
    if (response.status !== 200) {
      fetchClientFailure({ error: response.statusText })
    }
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
    if (response.status !== 200) {
      postClientFailure({ error: response.statusText })
    }
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

function* patchClientSaga(action: PatchClientRequest) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = yield* call(patchClient, action.payload)
    if (response.status !== 200) {
      patchClientFailure({ error: response.statusText })
    }
    yield* put(patchClientSuccess())
  } catch (e: any) {
    yield* put(
      patchClientFailure({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        error: e.message,
      })
    )
  }
}

function* clientSaga() {
  yield* all([
    takeLatest(FETCH_CLIENT_REQUEST, fetchClientSaga),
    takeLatest(POST_CLIENT_REQUEST, postClientSaga),
    takeLatest(PATCH_CLIENT_REQUEST, patchClientSaga),
  ])
}

export default clientSaga
