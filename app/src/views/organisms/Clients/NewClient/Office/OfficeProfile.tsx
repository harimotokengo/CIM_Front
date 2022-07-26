import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addOfficeAction } from '../../../../../store/actions/officeAction';
import { setAddOfficePayload } from '../../../../../store/models/officeModel';
import { getOfficeSelector } from '../../../../../store/selectors/officeSelector';
import { Form, FormInput,FormLabel, Row } from './Styled'

export const OfficeProfile = () => {
  const dispatch = useDispatch();

  // reduxのstate(最初は...initialStateの中身)をとってくる
  const state = useSelector(getOfficeSelector)

  const handleChange = (e: { target: HTMLInputElement }) => {
    // payloadの中身を用意し、
    // onChangeで受けとったevent(e)の中身をpayloadに代入する
    const payload: setAddOfficePayload = {
      // office:{name="",phone="",...}の中身を...stateで展開
      office: {
        // 今の...stateに、[name]に入力された[value]を上書きする
        ...state, [e.target.name]: e.target.value
      }
    }
    // actionオブジェクトと上記payloadをreduxに送る(dispatchする)
    dispatch(addOfficeAction(payload));
  };

  return (
    <Form>
      <Row>
        <FormLabel>事務所名</FormLabel>
        <FormInput type="text" name="name" value={state.name} onChange={handleChange} />
      </Row>
      <Row>
        <FormLabel>電話番号</FormLabel>
        <FormInput type="text" name="phone" value={state.phone} onChange={handleChange} />
      </Row>
      <Row>
        <FormLabel>郵便番号</FormLabel>
        <FormInput type="text" name="postcode" value={state.postcode} onChange={handleChange} />
      </Row>
      <Row>
        <FormLabel>住所</FormLabel>
        <FormInput type="text" name="address" value={state.address} onChange={handleChange} />
      </Row>
    </Form>
  )
}

export default OfficeProfile
