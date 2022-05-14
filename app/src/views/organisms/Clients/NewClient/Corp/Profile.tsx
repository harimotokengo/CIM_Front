import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { change, Field, FieldArray } from 'redux-form'

import Flex from '../../../../atoms/Flex'
import AddressCard from '../../../../molecules/ReduxForm/Card/AddressCard'
import EmailCard from '../../../../molecules/ReduxForm/Card/EmailCard'
import PhoneCard from '../../../../molecules/ReduxForm/Card/PhoneCard'
import { ReduxFormInput } from '../../../../molecules/ReduxForm/Input'
import { BirthInput } from '../../../../molecules/ReduxForm/Input/BirthInput'
import { ReduxFormTextArea } from '../../../../molecules/ReduxForm/TextArea'

const CorpProfile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(change('client_form', 'client_type_id', 2))
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Flex flexDirection="column" gap="24px" style={{ width: '534px', marginBottom: '20px' }}>
      <Field name="name" label="企業名" component={ReduxFormInput} />
      <Field name="name_kana" label="かな" component={ReduxFormInput} />
      <Field name="birth_date" label="設立年月日" component={BirthInput} />
      <Field name="indentification_number" label="識別番号" component={ReduxFormInput} />
      <Field name="profile" label="特記事項" component={ReduxFormTextArea} />
      <FieldArray label="電話番号" name="contact_phone_numbers_attributes" component={PhoneCard} />
      <FieldArray label="メールアドレス" name="contact_emails_attributes" component={EmailCard} />
      <FieldArray label="住所" name="contact_addresses_attributes" component={AddressCard} />
    </Flex>
  )
}

export default CorpProfile
