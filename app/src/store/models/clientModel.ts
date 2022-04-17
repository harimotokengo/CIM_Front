import { FETCH_CLIENT_FAILURE, FETCH_CLIENT_REQUEST, FETCH_CLIENT_SUCCESS, SET_CLIENT } from '../actions/clientAction'

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
  contact_addresses_attributes?: [
    {
      id: number
      category: string
      memo: string
      post_code: string
      prefecture: string
      address: string
      send_by_personal: string
      _destroy: boolean
    }
  ]
  contact_emails_attributes?: [
    {
      id: number
      category: string
      email: string
      memo: string
      _destroy: boolean
    }
  ]
  contact_phone_numbers_attributes?: [
    {
      id: number
      category: string
      phone_number: string
      memo: string
      extension_number: string
      _destroy: boolean
    }
  ]
  // matters_attributes: [
  //   {
  //     id: number
  //     user_id: string
  //     matter_genre_id: number
  //     service_price: string
  //     folder_url: string
  //     description: string
  //     matter_status_id: string
  //     start_date: string
  //     finish_date: string
  //     _destroy: boolean
  //     matter_joins_attributes: [
  //       {
  //         id: number
  //         belong_side_id: number
  //         admin: boolean
  //         office_id: number
  //         user_id: string
  //         _destroy: boolean
  //       }
  //     ]
  //     folder_urls_attributes: [
  //       {
  //         id: number
  //         name: string
  //         url: string
  //         _destroy: boolean
  //       }
  //     ]
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
  //   }
  // ]
}

export interface ClientState {
  pending: boolean
  client: IClient
  error: string | null
}

// API
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

// Local
export interface SetClientPayload {
  client: IClient
}

export type SetClient = {
  type: typeof SET_CLIENT
  payload: SetClientPayload
}

export type ClientActions = FetchClientRequest | FetchClientSuccess | FetchClientFailure | SetClient
