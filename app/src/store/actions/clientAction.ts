import {
  FetchClientFailure,
  FetchClientFailurePayload,
  FetchClientRequest,
  FetchClientSuccess,
  FetchClientSuccessPayload,
  PostClientFailure,
  PostClientPayload,
  PostClientRequest,
  PostClientSuccess,
} from '../models/clientModel'

// fetch
export const FETCH_CLIENT_REQUEST = 'FETCH_CLIENT_REQUEST'
export const FETCH_CLIENT_SUCCESS = 'FETCH_CLIENT_SUCCESS'
export const FETCH_CLIENT_FAILURE = 'FETCH_CLIENT_FAILURE'

// post
export const POST_CLIENT_REQUEST = 'SET_CLIENT_REQUEST'
export const POST_CLIENT_SUCCESS = 'SET_CLIENT_SUCCESS'
export const POST_CLIENT_FAILURE = 'SET_CLIENT_FAILURE'

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

export const postClientRequest = (payload: PostClientPayload): PostClientRequest => ({
  type: POST_CLIENT_REQUEST,
  payload,
})

export const postClientSuccess = (): PostClientSuccess => ({
  type: POST_CLIENT_SUCCESS,
})

export const postClientFailure = (payload: FetchClientFailurePayload): PostClientFailure => ({
  type: POST_CLIENT_FAILURE,
  payload,
})
