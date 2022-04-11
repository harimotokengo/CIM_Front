/* eslint-disable
@typescript-eslint/no-unsafe-call,
@typescript-eslint/no-unsafe-member-access,
@typescript-eslint/no-unsafe-return,
@typescript-eslint/no-unsafe-assignment */
import { RepositoryFactory } from './factories'

const userRepository = RepositoryFactory.get('users')

export const fetchUsers = () => userRepository.index()
