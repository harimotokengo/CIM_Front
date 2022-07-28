import { all, fork } from 'typed-redux-saga'

import clientSaga from './sagas/clientSaga'
import officeSaga from './sagas/officeSaga'
import sessionSaga from './sagas/sessionSaga'

export default function* rootSaga() {
  yield* all([fork(clientSaga), fork(sessionSaga), fork(officeSaga)])
}
