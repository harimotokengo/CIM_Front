import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import clientReducer from './reducers/clientReducer'
import filterReducer from './reducers/filterReducer'
import scrollReducer from './reducers/scrollReducer'
import sessionReducer from './reducers/sessionReducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  session: sessionReducer,
  client: clientReducer,
  scroll: scrollReducer,
  filter: filterReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
