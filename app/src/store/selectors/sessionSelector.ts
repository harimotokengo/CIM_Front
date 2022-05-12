/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getUser = (state: AppState) => state.session.user

const getPending = (state: AppState) => state.session.pending

const getError = (state: AppState) => state.session.error

export const getUserSelector = createSelector(getUser, user => user)

export const getPendingSelector = createSelector(getPending, pending => pending)

export const getErrorSelector = createSelector(getError, error => error)
