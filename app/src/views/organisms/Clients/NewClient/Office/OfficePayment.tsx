import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { payOfficeAction } from '../../../../../store/actions/officeAction';
import { setPayOfficePayload } from '../../../../../store/models/officeModel';
import { getPayOfficeSelector } from '../../../../../store/selectors/officeSelector';
import { Form, FormInput, FormLabel, FormTitle, Row } from './Styled'

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
    <Form>
      <FormTitle>
        <span>お支払い情報</span>
      </FormTitle>
      <Row>
        <FormLabel>タイプ</FormLabel>
        <FormInput type="text" name="type" value={state.type} onChange={handleChange} />
      </Row>
      <Row>
        <FormLabel>カード番号</FormLabel>
        <FormInput type="text" name="cardNumber" value={state.cardNumber} onChange={handleChange} />
      </Row>
      <Row>
        <FormLabel>有効期限</FormLabel>
        <FormInput type="text" name="deadline" value={state.deadline} onChange={handleChange} />
      </Row>
      <Row>
        <FormLabel>CVC</FormLabel>
        <FormInput type="text" name="cvc" value={state.cvc} onChange={handleChange} />
      </Row>
    </Form>
  )
}

export default OfficePayment
