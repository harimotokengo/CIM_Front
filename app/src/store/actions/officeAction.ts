/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SetOffice, SetOfficePayload } from '../models/officeModel'

export const SET_OFFICE = 'SET_OFFICE'

// 使い方
// dispatch(setOffice(payload))

export const setOffice = (payload: SetOfficePayload): SetOffice => ({
  type: SET_OFFICE,
  payload,
})
