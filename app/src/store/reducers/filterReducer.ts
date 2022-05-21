/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SET_FILTER } from '../actions/filterAction'
import { FilterActions, FilterState } from '../models/filterModel'

const initialState: FilterState = {
  filter: {
    is_filter: false,
  },
}

// eslint-disable-next-line default-param-last
export default (state = initialState, action: FilterActions): FilterState => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return {
        ...state,
      }
  }
}
