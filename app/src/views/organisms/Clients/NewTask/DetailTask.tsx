import { Field } from 'redux-form'

import Flex from '../../../atoms/Flex'
import TaskForm from '../../../molecules/ReduxForm/Form/TaskForm'
import { InputWithLabel } from '../../../molecules/ReduxForm/Input/InputWithLabel'
import { TextareaWithLabel } from '../../../molecules/ReduxForm/Input/TextareaWithLabel'
import { SelectStatus } from '../../../molecules/ReduxForm/Select/SelectStatus'
import { SelectWithLabel } from '../../../molecules/ReduxForm/Select/SelectWithLabel'
import { boxTaskPriority, Task } from '../../Matters/ListTask'

interface NewClientProps {
  // onCancel: () => void
  widthLabel: string
  dataDetail?: Task
}
const DetailTask = ({ widthLabel, dataDetail }: NewClientProps) => {
  // const validate = (value: string | number) => {
  //   if (typeof value === 'number') return undefined
  //   return value && value !== '' ? undefined : 'Required'
  // }
  const listPriority = boxTaskPriority
  const listProgres = [{ id: 0, value: '進行中', color: '#FF7070' }]
  const listRewards = ['タイムチャージ']
  const listDetails = ['紐付ける']

  return (
    <TaskForm>
      <Flex flexDirection="column" alignItems="center">
        <Field
          name="author"
          label="作成者"
          widthLabel={widthLabel}
          component={InputWithLabel}
          type="text"
          value={dataDetail?.name}
          gap="34px"
        />
        <Field
          name="manager"
          label="担当者"
          widthLabel={widthLabel}
          component={InputWithLabel}
          type="text"
          value={dataDetail?.manager}
          gap="34px"
        />
        <Field name="deadline" label="期日" widthLabel={widthLabel} component={InputWithLabel} type="date" gap="34px" />
        <Field name="matter" label="案件" widthLabel={widthLabel} component={InputWithLabel} type="text" gap="34px" />
        <Field
          name="rewards"
          label="報酬等"
          widthLabel={widthLabel}
          category={listRewards}
          component={SelectWithLabel}
          gap="34px"
        />
        <Field
          name="detail"
          label="明細"
          widthLabel={widthLabel}
          category={listDetails}
          component={SelectWithLabel}
          gap="34px"
        />
        <Field
          name="reflectDetails"
          label="明細反映"
          widthLabel={widthLabel}
          category={listDetails}
          component={SelectWithLabel}
          gap="34px"
        />
        <Field
          name="priority"
          label="優先順位"
          widthLabel={widthLabel}
          category={listPriority}
          gap="34px"
          width="80px"
          component={SelectStatus}
        />
        <Field
          name="progress"
          label="進捗状況"
          widthLabel={widthLabel}
          category={listProgres}
          component={SelectStatus}
          gap="34px"
          width="80px"
        />
        <Field
          name="explanation"
          label="説明"
          widthLabel={widthLabel}
          component={TextareaWithLabel}
          type="textarea"
          gap="34px"
        />
      </Flex>
    </TaskForm>
  )
}
export default DetailTask
