import { useState } from 'react';

import { OForm,SForm, SFormHead, SFormInput } from './Styled'

export const OfficeProfile = () => {

  const [office, setOfficeName] = useState('');
  const [phone, setOfficePhone] = useState('');
  const [postcode, setOfficePostCode] = useState('');
  const [address, setOfficeAddress] = useState('');

  const ChangeOfficeName = (event: { target: HTMLInputElement }) => {
    setOfficeName(event.target.value);
  };
  const ChangeOfficePhones = (event: { target: HTMLInputElement }) => {
    setOfficePhone(event.target.value);
  };
  const ChangeOfficePoseCode = (event: { target: HTMLInputElement }) => {
    setOfficePostCode(event.target.value);
  };
  const ChangeOfficeAddress = (event: { target: HTMLInputElement }) => {
    setOfficeAddress(event.target.value);
  };


  return (
    <SForm>
      <OForm>
        <SFormHead>事務所名</SFormHead>
        <SFormInput type="text" value={office} onChange={ChangeOfficeName} />
      </OForm>
      <OForm>
        <SFormHead>電話番号</SFormHead>
        <SFormInput type="text" value={phone} onChange={ChangeOfficePhones} />
      </OForm>
      <OForm>
        <SFormHead>郵便番号</SFormHead>
        <SFormInput type="text" value={postcode} onChange={ChangeOfficePoseCode} />
      </OForm>
      <OForm>
        <SFormHead>住所</SFormHead>
        <SFormInput type="text" value={address} onChange={ChangeOfficeAddress} />
      </OForm>
    </SForm>
  )
}

export default OfficeProfile
