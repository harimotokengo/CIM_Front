import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import clientReducer from './reducers/clientReducer'
import sessionReducer from './reducers/sessionReducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  session: sessionReducer,
  client: clientReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
