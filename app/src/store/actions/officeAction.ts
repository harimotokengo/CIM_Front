import {
  setAddOffice,
  setAddOfficePayload,
} from '../models/officeModel'

export const ADD_OFFICE = 'ADD_OFFICE'

// 引数payloadを取って、setAddOffice型を返す
export const addOfficeAction = (payload: setAddOfficePayload): setAddOffice => ({
  type: ADD_OFFICE,
  payload,
})


