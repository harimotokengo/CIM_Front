/* eslint-disable default-param-last */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SET_OFFICE } from '../actions/officeAction'
import { OfficeActions, OfficeState } from '../models/officeModel'

const initialState: OfficeState = {
  office: {
    name: '',
    phone_number: '',
  },
}

export default (state = initialState, action: OfficeActions): OfficeState => {
  switch (action.type) {
    case SET_OFFICE:
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
