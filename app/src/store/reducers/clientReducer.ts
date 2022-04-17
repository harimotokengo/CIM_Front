/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FETCH_CLIENT_FAILURE, FETCH_CLIENT_REQUEST, FETCH_CLIENT_SUCCESS, SET_CLIENT } from '../actions/clientAction'
import { ClientActions, ClientState } from '../models/clientModel'

const initialState: ClientState = {
  pending: false,
  client: {
    name: '',
    name_kana: '',
    first_name: '',
    first_name_kana: '',
    profile: '',
    maiden_name: '',
    maiden_name_kana: '',
    indentification_number: 0,
    birth_date: '',
    client_type_id: '',
    archive: false,
  },
  error: null,
}

// eslint-disable-next-line default-param-last
export default (state = initialState, action: ClientActions): ClientState => {
  switch (action.type) {
    // API
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
        error: action.payload.error,
      }
    // Local
    case SET_CLIENT:
      return {
        ...state,
        pending: false,
        client: action.payload.client,
        error: null,
      }
    default:
      return {
        ...state,
      }
  }
}
