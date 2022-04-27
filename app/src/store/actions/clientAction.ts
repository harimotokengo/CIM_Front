import {
  FetchClientFailure,
  FetchClientFailurePayload,
  FetchClientRequest,
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
} from '../models/clientModel'

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
