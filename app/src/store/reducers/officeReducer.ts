/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ADD_OFFICE,
  PAY_OFFICE,
  POST_OFFICE_FAILURE,
  POST_OFFICE_REQUEST,
  POST_OFFICE_SUCCESS,
} from '../actions/officeAction'
import { OfficeActions, officeState } from '../models/officeModel'

// 事務所情報
const initialState: officeState = {
  pending: false,
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
  error: null,
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
    // post
    case POST_OFFICE_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case POST_OFFICE_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null,
      }
    case POST_OFFICE_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      }
    default:
      return {
        ...state,
      }
  }
}
