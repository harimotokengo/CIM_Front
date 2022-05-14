/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { Field, WrappedFieldArrayProps } from 'redux-form'

import plusCircle from '../../../../assets/images/plus_circle.svg'
import { ADDRESS_CATEGORY } from '../../../../constants/clients'
import { IAddress } from '../../../../store/models/clientModel'
import { Card } from '../../../atoms/Card'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import Label from '../../../atoms/Label'
import Title from '../../../atoms/Title'
import { ReduxFormInput } from '../Input'
import { ReduxFormSelect } from '../Select'

const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />

type AddressCardProps = {
  label: string
}

const AddressCard = ({ label, fields }: WrappedFieldArrayProps<IAddress> & AddressCardProps) => {
  const handleClose = (index: number) => {
    const field = fields.get(index)
    if (field.id) {
      const newField = fields.get(index)
      newField._destroy = true
      fields.splice(index, 1, newField)
      return
    }
    fields.remove(index)
  }

  return (
    <>
      <Title variant="sub">{label}</Title>
      {fields.map((x, i) =>
        fields.get(i)._destroy ? (
          <></>
        ) : (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={i} closeButton onClosed={() => handleClose(i)}>
            <Flex flexWrap="wrap" gap="10px" mb="10px">
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
        )
      )}
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
}

export default AddressCard
