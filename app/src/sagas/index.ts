import { call, put, takeEvery } from 'typed-redux-saga'

import Api from '../apis'
import { failedFetch, REQUEST_FETCH, succeededFetch } from '../store/actions/request-action'

function* fetchUsers() {
  try {
    const payload = yield* call(Api.fetchUsers)
    yield* put(succeededFetch(payload))
  } catch (e: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
    yield* put(failedFetch(e.message))
  }
}

function* mySaga() {
  yield* takeEvery(REQUEST_FETCH, fetchUsers)
}

export default mySaga
