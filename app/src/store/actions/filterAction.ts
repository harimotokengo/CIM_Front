import { SetFilter, SetFilterPayload } from '../models/filterModel'

export const SET_FILTER = 'SET_FILTER'

export const setFilter = (payload: SetFilterPayload): SetFilter => ({
  type: SET_FILTER,
  payload,
})
