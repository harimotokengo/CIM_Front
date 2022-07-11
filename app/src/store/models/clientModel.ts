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

export interface IAddress {
  id?: number
  category: string
  memo: string
  post_code: string
  prefecture: string
  address: string
  send_by_personal: string
  _destroy?: boolean
}

export interface IEmail {
  id?: number
  category: string
  email: string
  memo: string
  _destroy?: boolean
}

export interface IPhoneNumber {
  id?: number
  category: string
  phone_number: string
  memo: string
  extension_number: string
  _destroy?: boolean
}

export interface IMatterJoin {
  id?: number
  admin?: boolean
  belong_side_id: number
  office_id?: number
  user_id?: number
  _destroy?: boolean
}

export interface IFolderUrl {
  id?: number
  name: string
  url: string
  _destroy?: boolean
}

export interface IMatter {
  id?: number
  user_id: number
  matter_genre_id: number
  // service_price: string
  // description: string
  matter_status_id: number
  start_date: string
  finish_date: string
  updated_at: string
  _destroy?: boolean
  matter_joins_attributes: IMatterJoin[]
  folder_urls_attributes: IFolderUrl[]
  //     fees_attributes: [
  //       {
  //         id: number
  //         fee_type_id: number
  //         price: number
  //         price_type: string
  //         monthly_date_id: number
  //         pay_times: string
  //         _destroy: boolean
  //       }
  //     ]
  //     opponents_attributes: [
  //       {
  //         id: number
  //         name: string
  //         name_kana: string
  //         first_name: string
  //         first_name_kana: string
  //         maiden_name: string
  //         maiden_name_kana: string
  //         phone_number: string
  //         profile: string
  //         birth_date: string
  //         opponent_type: string
  //         opponent_relation_type: string
  //         _destroy: boolean
  //         contact_addresses_attributes: [
  //           {
  //             id: number
  //             category: string
  //             memo: string
  //             post_code: string
  //             prefecture: string
  //             address: string
  //             send_by_personal: boolean
  //             _destroy: boolean
  //           }
  //         ]
  //         contact_emails_attributes: [
  //           {
  //             id: number
  //             category: string
  //             email: string
  //             memo: string
  //             _destroy: boolean
  //           }
  //         ]
  //         contact_phone_numbers_attributes: [
  //           {
  //             id: number
  //             category: string
  //             memo: string
  //             phone_number: string
  //             extension_number: string
  //             _destroy: boolean
  //           }
  //         ]
  //       }
  //     ]
}
// フォームに入る値
export interface IClient {
  id?: number
  name: string
  name_kana: string
  first_name: string
  first_name_kana: string
  profile: string
  maiden_name: string
  maiden_name_kana: string
  indentification_number: number
  birth_date: string
  client_type_id: string
  archive: boolean
  contact_addresses_attributes?: IAddress[]
  contact_emails_attributes?: IEmail[]
  contact_phone_numbers_attributes?: IPhoneNumber[]
  matters_attributes?: IMatter[]
}

export interface ClientState {
  pending: boolean
  client: IClient
  clients: IClient[]
  error: string | null
}

export interface SetClientPayload {
  client: IClient
}

// fetch
export interface FetchClientSuccessPayload {
  client: IClient
}

export interface FetchClientFailurePayload {
  error: string
}

export interface SetClient {
  type: typeof SET_CLIENT
  payload: SetClientPayload
}

export interface FetchClientRequest {
  type: typeof FETCH_CLIENT_REQUEST
  payload: FetchClientPayload
}

export type FetchClientSuccess = {
  type: typeof FETCH_CLIENT_SUCCESS
  payload: FetchClientSuccessPayload
}

export type FetchClientFailure = {
  type: typeof FETCH_CLIENT_FAILURE
  payload: FetchClientFailurePayload
}

// post
export interface PostClientPayload {
  client: IClient
}

export interface PostClientFailurePayload {
  error: string
}

export type PostClientRequest = {
  type: typeof POST_CLIENT_REQUEST
  payload: PostClientPayload
}

export type PostClientSuccess = {
  type: typeof POST_CLIENT_SUCCESS
}

export type PostClientFailure = {
  type: typeof POST_CLIENT_FAILURE
  payload: PostClientFailurePayload
}

// patch
export interface PatchClientPayload {
  client: IClient
}

export interface PatchClientFailurePayload {
  error: string
}

export type PatchClientRequest = {
  type: typeof PATCH_CLIENT_REQUEST
  payload: PatchClientPayload
}

export type PatchClientSuccess = {
  type: typeof PATCH_CLIENT_SUCCESS
}

export type PatchClientFailure = {
  type: typeof PATCH_CLIENT_FAILURE
  payload: PatchClientFailurePayload
}

// fetch clients
export interface FetchClientPayload {
  client: Required<Pick<IClient, 'id'>>
}

export interface FetchClientsSuccessPayload {
  clients: IClient[]
}

export interface FetchClientsFailurePayload {
  error: string
}

export type FetchClientsRequest = {
  type: typeof FETCH_CLIENTS_REQUEST
}

export type FetchClientsSuccess = {
  type: typeof FETCH_CLIENTS_SUCCESS
  payload: FetchClientsSuccessPayload
}

export type FetchClientsFailure = {
  type: typeof FETCH_CLIENTS_FAILURE
  payload: FetchClientsFailurePayload
}

export type ClientActions =
  | SetClient
  | FetchClientRequest
  | FetchClientSuccess
  | FetchClientFailure
  | PostClientRequest
  | PostClientSuccess
  | PostClientFailure
  | PatchClientRequest
  | PatchClientSuccess
  | PatchClientFailure
  | FetchClientsRequest
  | FetchClientsSuccess
  | FetchClientsFailure
