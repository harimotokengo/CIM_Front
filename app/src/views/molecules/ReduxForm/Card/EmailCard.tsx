/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-underscore-dangle */
import { Field, WrappedFieldArrayProps } from 'redux-form'

import plusCircle from '../../../../assets/images/plus_circle.svg'
import { EMAIL_CATEGORY } from '../../../../constants/clients'
import { IEmail } from '../../../../store/models/clientModel'
import { Card } from '../../../atoms/Card'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import Label from '../../../atoms/Label'
import Title from '../../../atoms/Title'
import { ReduxFormInput } from '../Input'
import { ReduxFormSelect } from '../Select'

const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />

type EmailCardProps = {
  label: string
}

const EmailCard = ({ label, fields }: WrappedFieldArrayProps<IEmail> & EmailCardProps) => {
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
                <Field name={`${x}.category`} label="種別" category={EMAIL_CATEGORY} component={ReduxFormSelect} />
              </FlexItem>
              <FlexItem width="auto">
                <Field name={`${x}.email`} label="メールアドレス" component={ReduxFormInput} />
              </FlexItem>
            </Flex>
            <Field name={`${x}.memo`} label="メモ" component={ReduxFormInput} />
          </Card>
        )
      )}
      <Label variant="icon" icon={plusCircleIcon} onClick={() => fields.push({ category: '', email: '', memo: '' })}>
        {label}を追加
      </Label>
    </>
  )
}

export default EmailCard
