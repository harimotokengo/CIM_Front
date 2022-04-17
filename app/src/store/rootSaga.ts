import { fork } from 'typed-redux-saga'

import clientSaga from './sagas/clientSaga'

export default function* rootSaga() {
  // yield* all([fork(clientSaga), fork(clientSaga)])
  yield* fork(clientSaga)
}
