import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import clientReducer from './reducers/clientReducer'
import filterReducer from './reducers/filterReducer'
import officeReducer from './reducers/officeReducer'
import scrollReducer from './reducers/scrollReducer'
import sessionReducer from './reducers/sessionReducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  session: sessionReducer,
  client: clientReducer,
  scroll: scrollReducer,
  filter: filterReducer,
  office: officeReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
