import { Action } from 'redux'
import { User } from '../models/user-model'

export const SET_USER = 'set_user'

export const setUser = (user: User): UserActionType => ({ type: SET_USER, user })

export interface UserActionType extends Action<string> {
  user: User
}
