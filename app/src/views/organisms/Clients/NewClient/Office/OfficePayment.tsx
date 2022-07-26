import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { payOfficeAction } from '../../../../../store/actions/officeAction';
import { setPayOfficePayload } from '../../../../../store/models/officeModel';
import { getPayOfficeSelector } from '../../../../../store/selectors/officeSelector';
import { DPayment, Row, SForm, SFormHead, SFormInput } from './Styled'

export const OfficePayment = () => {
  const dispatch = useDispatch();
  const state = useSelector(getPayOfficeSelector)


  const handleChange = (e: { target: HTMLInputElement }) => {
    const payload: setPayOfficePayload = {
      officePay: {
        ...state,[e.target.name]:e.target.value
      }
    }
    dispatch(payOfficeAction(payload));
  };

  return (
    <SForm>
      <DPayment>
        <span>お支払い情報</span>
      </DPayment>
      <Row>
        <SFormHead>タイプ</SFormHead>
        <SFormInput type="text" name="type" value={state.type} onChange={handleChange} />
      </Row>
      <Row>
        <SFormHead>カード番号</SFormHead>
        <SFormInput type="text" name="cardNumber" value={state.cardNumber} onChange={handleChange} />
      </Row>
      <Row>
        <SFormHead>有効期限</SFormHead>
        <SFormInput type="text" name="deadline" value={state.deadline} onChange={handleChange} />
      </Row>
      <Row>
        <SFormHead>CVC</SFormHead>
        <SFormInput type="text" name="cvc" value={state.cvc} onChange={handleChange} />
      </Row>
    </SForm>
  )
}

export default OfficePayment
