import { combineReducers } from 'redux'

import clientReducer from './reducers/clientReducer'

const rootReducer = combineReducers({
  client: clientReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
