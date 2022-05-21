import { SET_FILTER } from '../actions/filterAction'

export interface FilterState {
  filter: IFilter
}

export interface IFilter {
  is_filter: boolean
  filter_key?: string
  filter_value?: number | string
}

export interface SetFilterPayload {
  filter: IFilter
}

export type SetFilter = {
  type: typeof SET_FILTER
  payload: SetFilterPayload
}

export type FilterActions = SetFilter
