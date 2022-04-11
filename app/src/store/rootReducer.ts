import { combineReducers } from 'redux'

import clientReducer from './reducers/clientReducer'
import todoReducer from './reducers/todoReducer'

const rootReducer = combineReducers({
  todo: todoReducer,
  client: clientReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
