import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addOfficeAction } from '../../../../../store/actions/officeAction';
import { setAddOfficePayload } from '../../../../../store/models/officeModel';
import { getOfficeSelector } from '../../../../../store/selectors/officeSelector';
import { Row, SForm, SFormHead, SFormInput } from './Styled'

export const OfficeProfile = () => {
  const dispatch = useDispatch();

  // reduxのstateをとってくる
  const office = useSelector(getOfficeSelector)

  const handleChange = (e: { target: HTMLInputElement }) => {
    // payloadの中身を用意し、
    // onChangeで受けとったeventの中身をpayloadに代入
    const payload: setAddOfficePayload = {
      office: {
        ...office, [e.target.name]: e.target.value
      }
    }
    // actionオブジェクトとpayloadをreduxに送る(dispatchする)
    dispatch(addOfficeAction(payload));
  };

  return (
    <SForm>
      <Row>
        <SFormHead>事務所名</SFormHead>
        <SFormInput type="text" name="name" value={office.name} onChange={handleChange} />
      </Row>
      <Row>
        <SFormHead>電話番号</SFormHead>
        <SFormInput type="text" name="phone" value={office.phone} onChange={handleChange} />
      </Row>
      <Row>
        <SFormHead>郵便番号</SFormHead>
        <SFormInput type="text" name="postcode" value={office.postcode} onChange={handleChange} />
      </Row>
      <Row>
        <SFormHead>住所</SFormHead>
        <SFormInput type="text" name="address" value={office.address} onChange={handleChange} />
      </Row>
    </SForm>
  )
}

export default OfficeProfile
