export interface TaskDetail {
  id?: number
  author: string
  manager: string
  deadline: string
  matter: string
  rewards: string
  detail: string
  reflectDetails: string
  priority: number
  progress: string
}

export interface NewTask {
  id?: number
  title: string
  new_tasks_detail: TaskDetail[]
}

export interface TaskState {
  newTask: NewTask
}
