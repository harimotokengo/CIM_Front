import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import clientReducer from './reducers/clientReducer'

const rootReducer = combineReducers({
  form: reduxFormReducer,
  client: clientReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
