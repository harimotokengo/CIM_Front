import { useState } from 'react';

import { DPayment, Row, SForm, SFormHead, SFormInput } from './Styled'

// 型定義
interface OfficePaymentProps {
  type: string
  cnumber: string
  deadline: string
  cvc: string
}

export const OfficePayment = () => {
  const [PaymentValue, setPaymentValues] = useState<OfficePaymentProps>({
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
      <Row>
        <SFormHead>タイプ</SFormHead>
        <SFormInput type="text" name="type" value={PaymentValue.type} onChange={ChangePaymentValue} />
      </Row>
      <Row>
        <SFormHead>カード番号</SFormHead>
        <SFormInput type="text" name="cnumber" value={PaymentValue.cnumber} onChange={ChangePaymentValue} />
      </Row>
      <Row>
        <SFormHead>有効期限</SFormHead>
        <SFormInput type="text" name="deadline" value={PaymentValue.deadline} onChange={ChangePaymentValue} />
      </Row>
      <Row>
        <SFormHead>CVC</SFormHead>
        <SFormInput type="text" name="cvc" value={PaymentValue.cvc} onChange={ChangePaymentValue} />
      </Row>
    </SForm>
  )
}

export default OfficePayment
