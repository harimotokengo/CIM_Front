import {
  ADD_OFFICE,
} from '../actions/officeAction'

export interface IOffice {
  name: string
  phone: string
  postcode: string
  address: string
}

export interface officeState {
  office: IOffice
}

export interface setAddOfficePayload {
  office: IOffice
}

export interface setAddOffice{
  type: typeof ADD_OFFICE
  payload: setAddOfficePayload
}

export type OfficeActions = setAddOffice
