import { SET_SCROLL_POSITION } from '../actions/scrollAction'

export interface ScrollState {
  position: number
}

export interface IScroll {
  position: number
}

export interface SetScrollPayload {
  scroll: IScroll
}

export type SetScrollPosition = {
  type: typeof SET_SCROLL_POSITION
  payload: SetScrollPayload
}

export type ScrollActions = SetScrollPosition
