/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const REQUEST_FETCH = 'REQUEST_FETCH'
export const SUCCEEDED_FETCH = 'SUCCEEDED_FETCH'
export const FAILED_FETCH = 'FAILED_FETCH'

export const requestFetch = () => ({ type: REQUEST_FETCH })

export const succeededFetch = (payload: any) => ({ type: SUCCEEDED_FETCH, payload })

export const failedFetch = (message: string) => ({ type: FAILED_FETCH, message })
