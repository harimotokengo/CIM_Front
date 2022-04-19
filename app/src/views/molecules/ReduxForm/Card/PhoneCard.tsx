import { Field, WrappedFieldArrayProps } from 'redux-form'

import plusCircle from '../../../../assets/images/plus_circle.svg'
import { PHONE_CATEGORY } from '../../../../constants/clients'
import { IPhoneNumber } from '../../../../store/models/clientModel'
import { Card } from '../../../atoms/Card'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import Label from '../../../atoms/Label'
import { ReduxFormInput } from '../../../atoms/ReduxForm/Input'
import { ReduxFormSelect } from '../../../atoms/ReduxForm/Select'
import Title from '../../../atoms/Title'

const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />

type PhoneCardProps = {
  label: string
}

const EmailCard = ({ label, fields }: WrappedFieldArrayProps<IPhoneNumber> & PhoneCardProps) => (
  <>
    <Title variant="sub">{label}</Title>
    {fields.map((x, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Card key={i} width="534px" closeButton onClosed={() => fields.remove(i)}>
        <Flex container flexWrap="wrap" gap="10px" mb="10px">
          <FlexItem width="80px" stretch={false}>
            <Field name={`${x}.category`} label="種別" category={PHONE_CATEGORY} component={ReduxFormSelect} />
          </FlexItem>
          <FlexItem width="auto">
            <Field name={`${x}.phone_number`} label="電話番号" component={ReduxFormInput} />
          </FlexItem>
          <FlexItem width="100px" stretch={false}>
            <Field name={`${x}.extension_number`} label="内線番号" component={ReduxFormInput} />
          </FlexItem>
        </Flex>
        <Field name={`${x}.memo`} label="メモ" component={ReduxFormInput} />
      </Card>
    ))}
    <Label
      variant="icon"
      icon={plusCircleIcon}
      onClick={() => fields.push({ category: '', phone_number: '', extension_number: '', memo: '' })}
    >
      {label}を追加
    </Label>
  </>
)

export default EmailCard
