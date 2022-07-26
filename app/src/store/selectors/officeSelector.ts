/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

// 事務所情報
const getOffice = (state: AppState) => state.office.office

export const getOfficeSelector = createSelector(getOffice, office => office)

// 支払い情報
const getPayOffice = (state: AppState) => state.office.officePay

export const getPayOfficeSelector = createSelector(getPayOffice, officePay => officePay)

