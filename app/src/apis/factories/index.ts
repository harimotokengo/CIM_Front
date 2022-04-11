import { UserRepository } from '../repositories'

interface repositoryObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [name: string]: any
}

const repositories: repositoryObject = {
  users: UserRepository,
}

export const RepositoryFactory = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  get: (name: string) => repositories[name],
}
