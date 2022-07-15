import { SET_OFFICE } from '../actions/officeAction'

export interface IOffice {
  id?: number
  name: string
  phone_number: string
}

export interface OfficeState {
  office: IOffice
}

export interface SetOfficePayload {
  office: IOffice
}

export interface SetOffice {
  type: typeof SET_OFFICE
  payload: SetOfficePayload
}

export type OfficeActions = SetOffice
