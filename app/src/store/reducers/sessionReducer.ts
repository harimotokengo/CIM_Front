/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../actions/sessionAction'
import { SessionActions, SessionState } from '../models/sessionModel'

const initialState: SessionState = {
  pending: false,
  error: null,
}

// eslint-disable-next-line default-param-last
export default (state = initialState, action: SessionActions): SessionState => {
  switch (action.type) {
    // fetch
    case LOGIN_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      }
    default:
      return {
        ...state,
      }
  }
}
