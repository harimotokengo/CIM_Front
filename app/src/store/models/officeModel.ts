import {
  ADD_OFFICE,
  PAY_OFFICE,
  POST_OFFICE_FAILURE,
  POST_OFFICE_REQUEST,
  POST_OFFICE_SUCCESS,
} from '../actions/officeAction'

// 事務所情報入力
export interface IOffice {
  name: string
  phone: string
  postcode: string
  address: string
}
export interface officeState {
  pending: boolean
  office: IOffice
  officePay: PayOffice
  error: string | null
}
export interface setAddOfficePayload {
  office: IOffice
}
export interface setAddOffice{
  type: typeof ADD_OFFICE
  payload: setAddOfficePayload
}

export interface PostOfficePayload {
  office: IOffice
}

export interface PostOfficeFailurePayload {
  error: string
}

export type PostOfficeRequest = {
  type: typeof POST_OFFICE_REQUEST
  payload: PostOfficePayload
}

export type PostOfficeSuccess = {
  type: typeof POST_OFFICE_SUCCESS
}

export type PostOfficeFailure = {
  type: typeof POST_OFFICE_FAILURE
  payload: PostOfficeFailurePayload
}


// 支払い情報入力
export interface PayOffice {
  type: string
  cardNumber: string
  deadline: string
  cvc: string
}
export interface setPayOfficePayload {
  officePay: PayOffice
}
export interface setPayOffice{
  type: typeof PAY_OFFICE
  payload: setPayOfficePayload
}

export type OfficeActions =
  | setAddOffice
  | setPayOffice
  | PostOfficeRequest
  | PostOfficeSuccess
  | PostOfficeFailure


