/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ADD_OFFICE,
  PAY_OFFICE,
} from '../actions/officeAction'
import { OfficeActions, officeState } from '../models/officeModel'

// 事務所情報
const initialState: officeState = {
  office: {
    name: '',
    phone: '',
    postcode: '',
    address: '',
  },
  officePay: {
    type: '',
    cardNumber: '',
    deadline: '',
    cvc: '',
  },
}
// dispatchされるのはOfficeAction
export default (state = initialState, action: OfficeActions): officeState => {
  switch (action.type) {
    case ADD_OFFICE:
      return {
        ...state,
        office: action.payload.office,
      }
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
