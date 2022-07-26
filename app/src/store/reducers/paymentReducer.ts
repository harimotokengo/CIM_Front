/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  PAY_OFFICE,
} from '../actions/officeAction'
import { OfficeActions, officePayState } from '../models/officeModel'

// 事務所情報
const initialState: officePayState = {
  officePay: {
    type: '',
    cardNumber: '',
    deadline: '',
    cvc: '',
  },
}
// dispatchされるのはOfficeAction
export default (state = initialState, action: OfficeActions): officePayState => {
  switch (action.type) {
    case PAY_OFFICE:
      return {
        ...state,
        officePay: action.payload.officePay,
      }
    default:
      return {
        ...state,
      }
  }
}
