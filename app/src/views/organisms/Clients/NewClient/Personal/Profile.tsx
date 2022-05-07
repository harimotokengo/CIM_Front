import { Field, FieldArray /* GenericFieldArray */ } from 'redux-form'

import Flex from '../../../../atoms/Flex'
import { ReduxFormInput } from '../../../../atoms/ReduxForm/Input'
import AddressCard from '../../../../molecules/ReduxForm/Card/AddressCard'
import EmailCard from '../../../../molecules/ReduxForm/Card/EmailCard'
import PhoneCard from '../../../../molecules/ReduxForm/Card/PhoneCard'
import { BirthInput } from '../../../../molecules/ReduxForm/Input/BirthInput'

// const FieldArrayCustom = FieldArray as new () => GenericFieldArray<Field, IAddress>

const required = (value: any) => (value || typeof value === 'number' ? undefined : 'Required')

const PersonalProfile = () => (
  <Flex container flexDirection="column" gap="24px" style={{ width: '534px' }}>
    <Flex layout="equal-columns" gap="24px">
      <Field name="name" label="姓" component={ReduxFormInput} validate={required} />
      <Field name="first_name" label="名" component={ReduxFormInput} validate={required} />
    </Flex>
    <Flex layout="equal-columns" gap="24px">
      <Field name="name_kana" label="せい" component={ReduxFormInput} validate={required} />
      <Field name="first_name_kana" label="めい" component={ReduxFormInput} validate={required} />
    </Flex>
    <Field name="birth_date" label="生年月日" component={BirthInput} />
    <Field name="indentification_number" label="識別番号" component={ReduxFormInput} />
    <FieldArray label="電話番号" name="contact_phone_numbers_attributes" component={PhoneCard} />
    <FieldArray label="メールアドレス" name="contact_emails_attributes" component={EmailCard} />
    <FieldArray label="住所" name="contact_addresses_attributes" component={AddressCard} />
    <Field name="client_type_id" type="hidden" component="input" />
  </Flex>
)

export default PersonalProfile
