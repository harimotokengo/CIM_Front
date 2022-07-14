import {
  ADD_OFFICE,
} from '../actions/officeAction'

export interface AddOffice {
  name: string
  phone_number: string
  post_code: string
  address: string
  plan: string
  type: string
  cnumber: string
  deadline: string
  cvc: string
}

export interface setAddOfficePayload {
  client: AddOffice
}
export interface setAddOffice{
  type: typeof ADD_OFFICE
  payload: setAddOfficePayload
}

export type OfficeActions =
  | AddOffice
