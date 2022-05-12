/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { SET_SCROLL_POSITION } from '../actions/scrollAction'
import { ScrollActions, ScrollState } from '../models/scrollModel'

const initialState: ScrollState = {
  position: 0,
}

// eslint-disable-next-line default-param-last
export default (state = initialState, action: ScrollActions): ScrollState => {
  switch (action.type) {
    case SET_SCROLL_POSITION:
      return {
        ...state,
        ...action.payload.scroll,
      }
    default:
      return {
        ...state,
      }
  }
}
