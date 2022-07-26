/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react'
import { reduxForm } from 'redux-form'

import { IOffice } from '../../../../store/models/officeModel'
import { officeSubmit } from '../Submit/OfficeSubmit'
import { StyledForm } from './Styled'

const initialOffice: IOffice = {
  name: '',
  phone: '',
  postcode: '',
  address: '',
}

const OfficeForm = () => {

  return <StyledForm {...rest}>{children}</StyledForm>
}

// クライアント登録（client_form）のデータ
export default reduxForm<IOffice, IProps>({
  form: 'office_form',
  onSubmit: officeSubmit,
})(OfficeForm)
