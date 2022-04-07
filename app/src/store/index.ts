import { createStore, applyMiddleware, Store, combineReducers, Reducer } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { User } from './models/user-model'
import userReducer from './reducers/user-reducer'

interface State {
  user: User
}

const rootReducers: Reducer<State> = combineReducers({
  user: userReducer,
})

const store: Store = createStore(rootReducers, applyMiddleware(thunkMiddleware))

store.subscribe(() => {}) // eslint-disable-line @typescript-eslint/no-empty-function
export default store
