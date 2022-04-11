import axios from 'axios'
import { all, call, put, takeLatest } from 'typed-redux-saga'

import { FETCH_CLIENT_REQUEST, fetchClientFailure, fetchClientSuccess } from '../actions/clientAction'
import { IClient } from '../models/clientModel'

const getClients = () => axios.get<IClient>('http://localhost:3000/api/clients/99')

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

function* clientSaga() {
  yield* all([takeLatest(FETCH_CLIENT_REQUEST, fetchClientSaga)])
}

export default clientSaga
