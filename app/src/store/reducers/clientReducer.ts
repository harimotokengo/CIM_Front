/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  FETCH_CLIENT_FAILURE,
  FETCH_CLIENT_REQUEST,
  FETCH_CLIENT_SUCCESS,
  FETCH_CLIENTS_FAILURE,
  FETCH_CLIENTS_REQUEST,
  FETCH_CLIENTS_SUCCESS,
  PATCH_CLIENT_FAILURE,
  PATCH_CLIENT_REQUEST,
  PATCH_CLIENT_SUCCESS,
  POST_CLIENT_FAILURE,
  POST_CLIENT_REQUEST,
  POST_CLIENT_SUCCESS,
  SET_CLIENT,
} from '../actions/clientAction'
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
    matters_attributes: [
      {
        user_id: 0,
        matter_genre_id: 0,
        matter_status_id: 0,
        start_date: '',
        finish_date: '',
        _destroy: false,
        matter_joins_attributes: [
          {
            belong_side_id: 1,
            _destroy: false,
          },
        ],
        folder_urls_attributes: [
          {
            name: '',
            url: '',
            _destroy: false,
          },
        ],
      },
    ],
  },
  clients: [],
  error: null,
}

// eslint-disable-next-line default-param-last
export default (state = initialState, action: ClientActions): ClientState => {
  switch (action.type) {
    case SET_CLIENT:
      return {
        ...state,
        client: action.payload.client,
      }
    // fetch
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
    // post
    case POST_CLIENT_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case POST_CLIENT_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      }
    case POST_CLIENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }
    // patch
    case PATCH_CLIENT_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case PATCH_CLIENT_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      }
    case PATCH_CLIENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }
    // fetch clients
    case FETCH_CLIENTS_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        clients: action.payload.clients,
        error: null,
      }
    case FETCH_CLIENTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }
    default:
      return {
        ...state,
      }
  }
}
