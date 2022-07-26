import {
  setAddOffice,
  setAddOfficePayload,
  setPayOffice,
  setPayOfficePayload,
} from '../models/officeModel'

export const ADD_OFFICE = 'ADD_OFFICE'
export const PAY_OFFICE = 'PAY_OFFICE'

// 引数payloadを取って、setAddOffice型を返す

// 事務所情報
export const addOfficeAction = (payload: setAddOfficePayload): setAddOffice => ({
  type: ADD_OFFICE,
  payload,
})

// 支払い情報
export const payOfficeAction = (payload: setPayOfficePayload): setPayOffice => ({
  type: PAY_OFFICE,
  payload,
})

