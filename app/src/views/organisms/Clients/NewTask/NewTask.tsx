import { useState } from 'react'
import { Field } from 'redux-form'

import plusCircle from '../../../../assets/images/plus_circle.svg'
import { TaskDetail } from '../../../../store/models/taskModel'
import { Card } from '../../../atoms/Card'
import Flex from '../../../atoms/Flex'
import Label from '../../../atoms/Label'
import TaskForm from '../../../molecules/ReduxForm/Form/TaskForm'
import { InputWithLabel } from '../../../molecules/ReduxForm/Input/InputWithLabel'
import { TaskPriority } from '../../Matters/ListTask'
import DetailTask from './DetailTask'

interface NewClientProps {
  // onCancel: () => void
  widthLabel: string
}

const NewTask = ({ widthLabel }: NewClientProps) => {
  const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />
  const [tasks, setTasks] = useState<TaskDetail[]>([
    {
      id: 0,
      author: '',
      manager: '',
      deadline: '',
      matter: '',
      rewards: '',
      detail: '',
      reflectDetails: '',
      priority: TaskPriority.High,
      progress: '',
    },
  ])

  const addNewTask = () => {
    const newTask: TaskDetail = {
      author: '',
      manager: '',
      deadline: '',
      matter: '',
      rewards: '',
      detail: '',
      reflectDetails: '',
      priority: TaskPriority.High,
      progress: '',
    }
    setTasks([...tasks, newTask])
  }

  const removeTask = (taskIndex: number) => {
    setTasks(tasks.filter((task: TaskDetail, index: number) => index !== taskIndex))
  }

  return (
    <TaskForm>
      <Flex flexDirection="column" className="flex-hide-scrollbar" style={{ margin: '40px', maxHeight: '780px' }}>
        <Field
          name="title"
          widthLabel={widthLabel}
          component={InputWithLabel}
          type="text"
          placeholder="業務段階のタイトル"
        />

        {tasks.map((task: TaskDetail, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={index} closeButton onClosed={() => removeTask(index)}>
            <DetailTask widthLabel={widthLabel} />
          </Card>
        ))}

        <Label
          variant="icon"
          icon={plusCircleIcon}
          onClick={() => addNewTask()}
          style={{ position: 'relative', right: '-2%' }}
        >
          タスクを追加
        </Label>
      </Flex>
    </TaskForm>
  )
}
export default NewTask
