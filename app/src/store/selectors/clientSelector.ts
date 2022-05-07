/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getPending = (state: AppState) => state.client.pending

const getClient = (state: AppState) => state.client.client

const getClients = (state: AppState) => state.client.clients

const getError = (state: AppState) => state.client.error

export const getPendingSelector = createSelector(getPending, pending => pending)

export const getClientSelector = createSelector(getClient, client => client)

export const getClientsSelector = createSelector(getClients, clients => clients)

export const getErrorSelector = createSelector(getError, error => error)
