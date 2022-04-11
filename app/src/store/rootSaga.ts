import { fork } from 'typed-redux-saga'

import clientSaga from './sagas/clientSaga'
import todoSaga from './sagas/todoSaga'

export default function* rootSaga() {
  // yield* all([fork(todoSaga), fork(clientSaga)])
  yield* fork(todoSaga)
  yield* fork(clientSaga)
}
