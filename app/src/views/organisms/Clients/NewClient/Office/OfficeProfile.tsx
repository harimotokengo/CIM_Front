import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addOfficeAction } from '../../../../../store/actions/officeAction';
import { setAddOfficePayload } from '../../../../../store/models/officeModel';
import { getOfficeSelector } from '../../../../../store/selectors/officeSelector';
import { Row, SForm, SFormHead, SFormInput } from './Styled'

export const OfficeProfile = () => {
  const dispatch = useDispatch();

  // reduxのstate(最初は...initialStateの中身)をとってくる
  const state = useSelector(getOfficeSelector)

  const handleChange = (e: { target: HTMLInputElement }) => {
    // payloadの中身を用意し、
    // onChangeで受けとったeventの中身をpayloadに代入する
    const payload: setAddOfficePayload = {
      office: {
        // 今の...stateに、[name]に入力された[value]を上書きする
        ...state, [e.target.name]: e.target.value
      }
    }
    // actionオブジェクトと上記payloadをreduxに送る(dispatchする)
    dispatch(addOfficeAction(payload));
  };

  return (
    <SForm>
      <Row>
        <SFormHead>事務所名</SFormHead>
        <SFormInput type="text" name="name" value={state.name} onChange={handleChange} />
      </Row>
      <Row>
        <SFormHead>電話番号</SFormHead>
        <SFormInput type="text" name="phone" value={state.phone} onChange={handleChange} />
      </Row>
      <Row>
        <SFormHead>郵便番号</SFormHead>
        <SFormInput type="text" name="postcode" value={state.postcode} onChange={handleChange} />
      </Row>
      <Row>
        <SFormHead>住所</SFormHead>
        <SFormInput type="text" name="address" value={state.address} onChange={handleChange} />
      </Row>
    </SForm>
  )
}

export default OfficeProfile
