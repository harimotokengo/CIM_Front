import { ReactNode } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { TaskState } from '../../../../store/models/taskModel'
import { StyledForm } from './Styled'

type IProps = {
  children: ReactNode | ReactNode[]
}

type ITaskFormProps = InjectedFormProps<TaskState, IProps> & IProps

const initialTask: TaskState = {
  newTask: {
    id: 0,
    title: '',
    new_tasks_detail: [],
  },
}

const TaskForm = ({ children, ...rest }: ITaskFormProps) => <StyledForm {...rest}>{children}</StyledForm>

export default reduxForm<TaskState, IProps>({
  form: 'task_form',
  initialValues: initialTask,
  onSubmit: () => {},
})(TaskForm)
