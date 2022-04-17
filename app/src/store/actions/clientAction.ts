import {
  FetchClientFailure,
  FetchClientFailurePayload,
  FetchClientRequest,
  FetchClientSuccess,
  FetchClientSuccessPayload,
  SetClient,
  SetClientPayload,
} from '../models/clientModel'

// API
export const FETCH_CLIENT_REQUEST = 'FETCH_CLIENT_REQUEST'
export const FETCH_CLIENT_SUCCESS = 'FETCH_CLIENT_SUCCESS'
export const FETCH_CLIENT_FAILURE = 'FETCH_CLIENT_FAILURE'

// Local
export const SET_CLIENT = 'SET_CLIENT'

export const fetchClientRequest = (): FetchClientRequest => ({
  type: FETCH_CLIENT_REQUEST,
})

export const fetchClientSuccess = (payload: FetchClientSuccessPayload): FetchClientSuccess => ({
  type: FETCH_CLIENT_SUCCESS,
  payload,
})

export const fetchClientFailure = (payload: FetchClientFailurePayload): FetchClientFailure => ({
  type: FETCH_CLIENT_FAILURE,
  payload,
})

export const setClient = (payload: SetClientPayload): SetClient => ({
  type: SET_CLIENT,
  payload,
})
