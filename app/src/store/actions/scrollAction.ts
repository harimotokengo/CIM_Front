import { SetScrollPayload, SetScrollPosition } from '../models/scrollModel'

export const SET_SCROLL_POSITION = 'SET_SCROLL_POSITION'

export const setScrollPosition = (payload: SetScrollPayload): SetScrollPosition => ({
  type: SET_SCROLL_POSITION,
  payload,
})
