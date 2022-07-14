import { useState } from 'react';

import { OForm,SForm, SFormHead, SFormInput } from './Styled'


export const OfficeProfile = () => {
  const [officeValue, setOfficeValues] = useState({
    name: '',
    phone: '',
    postcode: '',
    address: ''
  });

  const ChangeOfficeValue = (event: { target: HTMLInputElement }) => {
    setOfficeValues({ ...officeValue, [event.target.name]: event.target.value });
  };

  return (
    <SForm>
      <OForm>
        <SFormHead>事務所名</SFormHead>
        <SFormInput type="text" name="name" value={officeValue.name} onChange={ChangeOfficeValue} />
      </OForm>
      <OForm>
        <SFormHead>電話番号</SFormHead>
        <SFormInput type="text" name="phone" value={officeValue.phone} onChange={ChangeOfficeValue} />
      </OForm>
      <OForm>
        <SFormHead>郵便番号</SFormHead>
        <SFormInput type="text" name="postcode" value={officeValue.postcode} onChange={ChangeOfficeValue} />
      </OForm>
      <OForm>
        <SFormHead>住所</SFormHead>
        <SFormInput type="text" name="address" value={officeValue.address} onChange={ChangeOfficeValue} />
      </OForm>
    </SForm>
  )
}

export default OfficeProfile
