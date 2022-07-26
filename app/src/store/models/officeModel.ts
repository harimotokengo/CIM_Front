import {
  ADD_OFFICE, PAY_OFFICE,
} from '../actions/officeAction'

// 事務所情報入力
export interface IOffice {
  name: string
  phone: string
  postcode: string
  address: string
}
export interface officeState {
  office: IOffice
  officePay: PayOffice
}
export interface setAddOfficePayload {
  office: IOffice
}
export interface setAddOffice{
  type: typeof ADD_OFFICE
  payload: setAddOfficePayload
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


