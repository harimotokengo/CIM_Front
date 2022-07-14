import {
  setAddOffice,
  setAddOfficePayload,
} from '../models/officeModel'

export const ADD_OFFICE = 'ADD_OFFICE'

export const addOfficeAction = (payload: setAddOfficePayload): setAddOffice => ({
  type: ADD_OFFICE,
  payload,
})


