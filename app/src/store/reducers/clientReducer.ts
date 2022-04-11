/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FETCH_CLIENT_FAILURE, FETCH_CLIENT_REQUEST, FETCH_CLIENT_SUCCESS } from '../actions/clientAction'
import { ClientActions, ClientState } from '../models/clientModel'

const initialState: ClientState = {
  pending: false,
  client: { id: 0, name: '' },
  error: null,
}

// eslint-disable-next-line default-param-last
export default (state = initialState, action: ClientActions) => {
  switch (action.type) {
    case FETCH_CLIENT_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case FETCH_CLIENT_SUCCESS:
      return {
        ...state,
        pending: false,
        client: action.payload.client,
        error: null,
      }
    case FETCH_CLIENT_FAILURE:
      return {
        ...state,
        pending: false,
        client: { id: 0, name: '' },
        error: action.payload.error,
      }
    default:
      return {
        ...state,
      }
  }
}
