import { useDispatch, useSelector } from 'react-redux'

import { setClient } from '../../../../store/actions/clientAction'
import { getClientSelector } from '../../../../store/selectors/clientSelector'
import { InputWithLabel } from '../../../atoms/Input/InputWithLabel'
import { TextAreaWithLabel } from '../../../atoms/TextArea/TextAreaWithLabel'
import { BirthInput } from '../../../molecules/Input/BirthInput'
import AddressCard from '../common/AddressCard'
import EmailCard from '../common/EmailCard'
import { NameForm } from '../common/NameForm'
import PhoneCard from '../common/PhoneCard'

const PersonalProfile = () => {
  const dispatch = useDispatch()
  const client = useSelector(getClientSelector)

  const onValueChange = (value: string) => {
    client.name = value
    dispatch(setClient({ client }))
  }

  return (
    <>
      <NameForm />
      <BirthInput />
      <InputWithLabel label="識別番号" value="" style={{ width: '200px' }} onValueChange={onValueChange} />
      <TextAreaWithLabel label="特記事項" value="" style={{ height: '108px' }} />
      <PhoneCard />
      <EmailCard />
      <AddressCard />
    </>
  )
}

export default PersonalProfile
