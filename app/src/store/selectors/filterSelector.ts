/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getFilter = (state: AppState) => state.filter.filter

export const getFilterSelector = createSelector(getFilter, filter => filter)
