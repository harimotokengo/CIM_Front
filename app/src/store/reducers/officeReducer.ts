/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  ADD_OFFICE,
} from '../actions/officeAction'
import { OfficeActions, officeState } from '../models/officeModel'

// initialStateがstate？
const initialState: officeState = {
  office: {
    name: '',
    phone: '',
    postcode: '',
    address: '',
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
    default:
      return {
        ...state,
      }
  }
}

