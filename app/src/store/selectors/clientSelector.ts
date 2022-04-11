/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getPending = (state: AppState) => state.client.pending

const getClient = (state: AppState) => state.client.client

const getError = (state: AppState) => state.client.error

export const getClientSelector = createSelector(getClient, client => client)

export const getPendingSelector = createSelector(getPending, pending => pending)

export const getErrorSelector = createSelector(getError, error => error)
