import { FETCH_CLIENT_FAILURE, FETCH_CLIENT_REQUEST, FETCH_CLIENT_SUCCESS } from '../actions'

export interface IClient {
  id: number
  name: string
}

export interface ClientState {
  pending: boolean
  client: IClient
  error: string | null
}

export interface FetchClientSuccessPayload {
  client: IClient
}

export interface FetchClientFailurePayload {
  error: string
}

export interface FetchClientRequest {
  type: typeof FETCH_CLIENT_REQUEST
}

export type FetchClientSuccess = {
  type: typeof FETCH_CLIENT_SUCCESS
  payload: FetchClientSuccessPayload
}

export type FetchClientFailure = {
  type: typeof FETCH_CLIENT_FAILURE
  payload: FetchClientFailurePayload
}

export type ClientActions = FetchClientRequest | FetchClientSuccess | FetchClientFailure
