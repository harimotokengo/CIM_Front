import { all, call, put, takeLatest } from 'typed-redux-saga'

import {
  FETCH_CLIENT_REQUEST,
  FETCH_CLIENTS_REQUEST,
  fetchClientFailure,
  fetchClientsFailure,
  fetchClientsSuccess,
  fetchClientSuccess,
  PATCH_CLIENT_REQUEST,
  patchClientFailure,
  patchClientSuccess,
  POST_CLIENT_REQUEST,
  postClientFailure,
  postClientSuccess,
} from '../actions/clientAction'
import {
  FetchClientPayload,
  FetchClientRequest,
  IClient,
  PatchClientPayload,
  PatchClientRequest,
  PostClientPayload,
  PostClientRequest,
} from '../models/clientModel'
import { apiInstance, baseURL } from '.'

const path = '/clients'

const getClient = (payload: FetchClientPayload) => apiInstance.get<IClient>(`${baseURL}${path}/${payload.client.id}`)
const getClients = () => apiInstance.get<IClient[]>(`${baseURL}${path}`)
const postClient = (payload: PostClientPayload) => apiInstance.post<IClient>(`${baseURL}${path}`, payload)
const patchClient = (payload: PatchClientPayload) =>
  apiInstance.patch<IClient>(`${baseURL}${path}/${payload.client.id!}`, payload)

function* fetchClientsSaga() {
  try {
    const response = yield* call(getClients)
    if (response.status !== 200) {
      yield* put(fetchClientsFailure({ error: response.statusText }))
    }
    yield* put(
      fetchClientsSuccess({
        clients: response.data,
      })
    )
  } catch (e: any) {
    yield* put(
      fetchClientsFailure({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        error: e.message,
      })
    )
  }
}

function* fetchClientSaga(action: FetchClientRequest) {
  try {
    const response = yield* call(getClient, action.payload)
    if (response.status !== 200) {
      yield* put(fetchClientFailure({ error: response.statusText }))
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
      yield* put(postClientFailure({ error: response.statusText }))
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
      yield* put(patchClientFailure({ error: response.statusText }))
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
    takeLatest(FETCH_CLIENTS_REQUEST, fetchClientsSaga),
    takeLatest(FETCH_CLIENT_REQUEST, fetchClientSaga),
    takeLatest(POST_CLIENT_REQUEST, postClientSaga),
    takeLatest(PATCH_CLIENT_REQUEST, patchClientSaga),
  ])
}

export default clientSaga
