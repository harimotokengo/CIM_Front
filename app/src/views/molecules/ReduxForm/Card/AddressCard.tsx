import { Field, WrappedFieldArrayProps } from 'redux-form'

import plusCircle from '../../../../assets/images/plus_circle.svg'
import { ADDRESS_CATEGORY } from '../../../../constants/clients'
import { IAddress } from '../../../../store/models/clientModel'
import { Card } from '../../../atoms/Card'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import Label from '../../../atoms/Label'
import { ReduxFormInput } from '../../../atoms/ReduxForm/Input'
import { ReduxFormSelect } from '../../../atoms/ReduxForm/Select'
import Title from '../../../atoms/Title'

const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />

type AddressCardProps = {
  label: string
}

const AddressCard = ({ label, fields }: WrappedFieldArrayProps<IAddress> & AddressCardProps) => (
  <>
    <Title variant="sub">{label}</Title>
    {fields.map((x, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <Card key={i} width="534px" closeButton onClosed={() => fields.remove(i)}>
        <Flex container flexWrap="wrap" gap="10px" mb="10px">
          <FlexItem width="80px" stretch={false}>
            <Field name={`${x}.category`} label="種別" category={ADDRESS_CATEGORY} component={ReduxFormSelect} />
          </FlexItem>
          <FlexItem width="auto">
            <Field name={`${x}.post_code`} label="郵便番号" component={ReduxFormInput} />
          </FlexItem>
          <FlexItem width="auto">
            <Field name={`${x}.prefecture`} label="都道府県" component={ReduxFormInput} />
          </FlexItem>
        </Flex>
        <Field name={`${x}.address`} label="住所" component={ReduxFormInput} />
      </Card>
    ))}
    <Label
      variant="icon"
      icon={plusCircleIcon}
      onClick={() =>
        fields.push({ category: '', memo: '', post_code: '', prefecture: '', address: '', send_by_personal: '' })
      }
    >
      {label}を追加
    </Label>
  </>
)

export default AddressCard