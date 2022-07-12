import {
  FetchClientFailure,
  FetchClientFailurePayload,
  FetchClientPayload,
  FetchClientRequest,
  FetchClientsFailure,
  FetchClientsFailurePayload,
  FetchClientsRequest,
  FetchClientsSuccess,
  FetchClientsSuccessPayload,
  FetchClientSuccess,
  FetchClientSuccessPayload,
  PatchClientFailure,
  PatchClientFailurePayload,
  PatchClientPayload,
  PatchClientRequest,
  PatchClientSuccess,
  PostClientFailure,
  PostClientFailurePayload,
  PostClientPayload,
  PostClientRequest,
  PostClientSuccess,
  SetClient,
  SetClientPayload,
} from '../models/clientModel'

export const SET_CLIENT = 'SET_CLIENT'

// fetch
export const FETCH_CLIENT_REQUEST = 'FETCH_CLIENT_REQUEST'
export const FETCH_CLIENT_SUCCESS = 'FETCH_CLIENT_SUCCESS'
export const FETCH_CLIENT_FAILURE = 'FETCH_CLIENT_FAILURE'

// post
export const POST_CLIENT_REQUEST = 'POST_CLIENT_REQUEST'
export const POST_CLIENT_SUCCESS = 'POST_CLIENT_SUCCESS'
export const POST_CLIENT_FAILURE = 'POST_CLIENT_FAILURE'

// patch
export const PATCH_CLIENT_REQUEST = 'PATCH_CLIENT_REQUEST'
export const PATCH_CLIENT_SUCCESS = 'PATCH_CLIENT_SUCCESS'
export const PATCH_CLIENT_FAILURE = 'PATCH_CLIENT_FAILURE'

// fetch clients
export const FETCH_CLIENTS_REQUEST = 'FETCH_CLIENTS_REQUEST'
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS'
export const FETCH_CLIENTS_FAILURE = 'FETCH_CLIENTS_FAILURE'

export const setClient = (payload: SetClientPayload): SetClient => ({
  type: SET_CLIENT,
  payload,
})

export const fetchClientRequest = (payload: FetchClientPayload): FetchClientRequest => ({
  type: FETCH_CLIENT_REQUEST,
  payload,
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

export const postClientFailure = (payload: PostClientFailurePayload): PostClientFailure => ({
  type: POST_CLIENT_FAILURE,
  payload,
})

export const patchClientRequest = (payload: PatchClientPayload): PatchClientRequest => ({
  type: PATCH_CLIENT_REQUEST,
  payload,
})

export const patchClientSuccess = (): PatchClientSuccess => ({
  type: PATCH_CLIENT_SUCCESS,
})

export const patchClientFailure = (payload: PatchClientFailurePayload): PatchClientFailure => ({
  type: PATCH_CLIENT_FAILURE,
  payload,
})

export const fetchClientsRequest = (): FetchClientsRequest => ({
  type: FETCH_CLIENTS_REQUEST,
})

export const fetchClientsSuccess = (payload: FetchClientsSuccessPayload): FetchClientsSuccess => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload,
})

export const fetchClientsFailure = (payload: FetchClientsFailurePayload): FetchClientsFailure => ({
  type: FETCH_CLIENTS_FAILURE,
  payload,
})

