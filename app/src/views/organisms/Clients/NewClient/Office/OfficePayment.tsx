import { useState } from 'react';

import { DPayment, OForm,SForm, SFormHead, SFormInput } from './Styled'


export const OfficePayment = () => {
  const [PaymentValue, setPaymentValues] = useState({
    type: '',
    cnumber: '',
    deadline: '',
    cvc: ''
  });

  const ChangePaymentValue = (event: { target: HTMLInputElement }) => {
    setPaymentValues({ ...PaymentValue, [event.target.name]: event.target.value });
  };

  return (
    <SForm>
      <DPayment>
        <span>お支払い情報</span>
      </DPayment>
      <OForm>
        <SFormHead>タイプ</SFormHead>
        <SFormInput type="text" name="type" value={PaymentValue.type} onChange={ChangePaymentValue} />
      </OForm>
      <OForm>
        <SFormHead>カード番号</SFormHead>
        <SFormInput type="text" name="cnumber" value={PaymentValue.cnumber} onChange={ChangePaymentValue} />
      </OForm>
      <OForm>
        <SFormHead>有効期限</SFormHead>
        <SFormInput type="text" name="deadline" value={PaymentValue.deadline} onChange={ChangePaymentValue} />
      </OForm>
      <OForm>
        <SFormHead>CVC</SFormHead>
        <SFormInput type="text" name="cvc" value={PaymentValue.cvc} onChange={ChangePaymentValue} />
      </OForm>
    </SForm>
  )
}

export default OfficePayment
