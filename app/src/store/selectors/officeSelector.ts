/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getOffice = (state: AppState) => state.office.office

export const getOfficeSelector = createSelector(getOffice, pending => pending)
