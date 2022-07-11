/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Field, FieldArray /* GenericFieldArray */ } from 'redux-form'

import { AppState } from '../../../../store/rootReducer'
import { getAge, getBirthdayProperty } from '../../../../utils/common'
import Flex from '../../../atoms/Flex'
import { InputWrapper } from '../../../atoms/Input/InputWrapper'
import AddressCard from '../../../molecules/ReduxForm/Card/AddressCard'
import EmailCard from '../../../molecules/ReduxForm/Card/EmailCard'
import PhoneCard from '../../../molecules/ReduxForm/Card/PhoneCard'
import { ReduxFormInput } from '../../../molecules/ReduxForm/Input'
import { BirthInput } from '../../../molecules/ReduxForm/Input/BirthInput'
import MatterForm from '../Matter/Matter'

const required = (value: string | number) => (value || typeof value === 'number' ? undefined : 'Required')

const ClientForm = () => {
  const formState = useSelector((state: AppState) => state.form)
  const [age, setAge] = useState<number | null>(null)
  const [birthdayProperty, setBirthdayProperty] = useState<any | null>(null)

  useEffect(() => {
    if (
      formState.client_form_edit &&
      formState.client_form_edit.values &&
      formState.client_form_edit.values.birth_date
    ) {
      setAge(getAge(formState.client_form_edit.values.birth_date as string))
      setBirthdayProperty(getBirthdayProperty(formState.client_form_edit.values.birth_date as string))
    }
  }, [formState])

  return (
    <Flex flexDirection="column" gap="24px" style={{ width: '534px' }}>
      <Flex layout="equal-columns" gap="24px">
        <Field name="name" label="姓" component={ReduxFormInput} validate={[required]} />
        <Field name="first_name" label="名" component={ReduxFormInput} validate={[required]} />
      </Flex>
      <Flex layout="equal-columns" gap="24px">
        <Field name="name_kana" label="せい" component={ReduxFormInput} validate={[required]} />
        <Field name="first_name_kana" label="めい" component={ReduxFormInput} validate={[required]} />
      </Flex>
      <Flex layout="fill" gap="24px">
        <Field
          name="birth_date"
          label="生年月日"
          y={birthdayProperty?.year.toString() || ''}
          m={birthdayProperty?.month.toString() || ''}
          d={birthdayProperty?.day.toString() || ''}
          component={BirthInput}
        />
        <InputWrapper label="年齢">
          <p>{age ? `満${age}歳` : ''}</p>
        </InputWrapper>
      </Flex>
      <FieldArray label="電話番号" name="contact_phone_numbers_attributes" component={PhoneCard} />
      <FieldArray label="メールアドレス" name="contact_emails_attributes" component={EmailCard} />
      <FieldArray label="住所" name="contact_addresses_attributes" component={AddressCard} />
      <Field name="client_type_id" type="hidden" component="input" />
      {/* @ts-ignore */}
      <FieldArray name="matters_attributes" component={MatterForm} />
    </Flex>
  )
}

export default ClientForm
