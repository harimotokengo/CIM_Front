import axios from 'axios'
import { all, call, put, takeLatest } from 'typed-redux-saga'

import { FETCH_TODO_REQUEST, fetchTodoFailure, fetchTodoSuccess } from '../actions/todoAction'
import { ITodo } from '../models/todoModel'

const getTodos = () => axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')

function* fetchTodoSaga() {
  try {
    const response = yield* call(getTodos)
    yield* put(
      fetchTodoSuccess({
        todos: response.data,
      })
    )
  } catch (e: any) {
    yield* put(
      fetchTodoFailure({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
        error: e.message,
      })
    )
  }
}

function* todoSaga() {
  yield* all([takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga)])
}

export default todoSaga
