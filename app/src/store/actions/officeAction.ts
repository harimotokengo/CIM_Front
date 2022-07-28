import {
  PostOfficeFailure,
  PostOfficeFailurePayload,
  PostOfficePayload,
  PostOfficeRequest,
  PostOfficeSuccess,
  setAddOffice,
  setAddOfficePayload,
  setPayOffice,
  setPayOfficePayload,
} from '../models/officeModel'

export const ADD_OFFICE = 'ADD_OFFICE'
export const PAY_OFFICE = 'PAY_OFFICE'
// post
export const POST_OFFICE_REQUEST = 'POST_OFFICE_REQUEST'
export const POST_OFFICE_SUCCESS = 'POST_OFFICE_SUCCESS'
export const POST_OFFICE_FAILURE = 'POST_OFFICE_FAILURE'

// 引数payloadを取って、setAddOffice型を返す

// 事務所情報
export const addOfficeAction = (payload: setAddOfficePayload): setAddOffice => ({
  type: ADD_OFFICE,
  payload,
})

export const postOfficeRequest = (payload: PostOfficePayload): PostOfficeRequest => ({
  type: POST_OFFICE_REQUEST,
  payload,
})

export const postOfficeSuccess = (): PostOfficeSuccess => ({
  type: POST_OFFICE_SUCCESS,
})

export const postOfficeFailure = (payload: PostOfficeFailurePayload): PostOfficeFailure => ({
  type: POST_OFFICE_FAILURE,
  payload,
})



// 支払い情報
export const payOfficeAction = (payload: setPayOfficePayload): setPayOffice => ({
  type: PAY_OFFICE,
  payload,
})

