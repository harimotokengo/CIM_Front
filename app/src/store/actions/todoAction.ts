import {
  FetchTodoFailure,
  FetchTodoFailurePayload,
  FetchTodoRequest,
  FetchTodoSuccess,
  FetchTodoSuccessPayload,
} from '../models/todoModel'

export const FETCH_TODO_REQUEST = 'FETCH_TODO_REQUEST'
export const FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS'
export const FETCH_TODO_FAILURE = 'FETCH_TODO_FAILURE'

export const fetchTodoRequest = (): FetchTodoRequest => ({
  type: FETCH_TODO_REQUEST,
})

export const fetchTodoSuccess = (payload: FetchTodoSuccessPayload): FetchTodoSuccess => ({
  type: FETCH_TODO_SUCCESS,
  payload,
})

export const fetchTodoFailure = (payload: FetchTodoFailurePayload): FetchTodoFailure => ({
  type: FETCH_TODO_FAILURE,
  payload,
})
