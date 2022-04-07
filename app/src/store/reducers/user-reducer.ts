/* eslint-disable default-param-last */
import { AnyAction } from 'redux'
import { SET_USER } from '../actions/user-action'
import { User } from '../models/user-model'

const initialState: User = {
  email: '',
}

function userReducer(state: User = initialState, action: AnyAction): User {
  switch (action.type) {
    case SET_USER: {
      return { ...state, email: action.email } // eslint-disable-line @typescript-eslint/no-unsafe-assignment
    }
    default:
      return state
  }
}

export default userReducer
