import { Field } from 'redux-form'

import Flex from '../../../atoms/Flex'
import ClientForm from '../../../molecules/ReduxForm/Form/ClientForm'
import { InputWithLabel } from '../../../molecules/ReduxForm/Input/InputWithLabel'
import { TextareaWithLabel } from '../../../molecules/ReduxForm/Input/TextareaWithLabel'
import { SelectWithLabel } from '../../../molecules/ReduxForm/Select/SelectWithLabel'
import { Record } from '../../Matters/Records'

interface NewClientProps {
  widthLabel: string
  data?: Record
}
const NewRecord = ({ widthLabel, data }: NewClientProps) => (
  <ClientForm>
    <Flex flexDirection="column" alignItems="center" px="40px" py="26px">
      <Field
        name="manager"
        label="担当者"
        widthLabel={widthLabel}
        component={InputWithLabel}
        type="text"
        valueDefault={data?.manager}
      />
      <Field
        name="workDay"
        label="作業日"
        widthLabel={widthLabel}
        component={InputWithLabel}
        type="date"
        valueDefault={data?.workDay}
      />
      <Field
        name="infoLinked"
        label="紐付ける情報"
        widthLabel={widthLabel}
        category={['既存報酬']}
        component={SelectWithLabel}
      />
      <Field
        name="rewards"
        label="既存報酬から選択"
        widthLabel={widthLabel}
        category={['タイムチャージ']}
        component={SelectWithLabel}
      />
      <Field
        name="content"
        label="作業内容"
        widthLabel={widthLabel}
        component={TextareaWithLabel}
        type="text"
        valueDefault={data?.content}
      />
    </Flex>
  </ClientForm>
)
export default NewRecord
