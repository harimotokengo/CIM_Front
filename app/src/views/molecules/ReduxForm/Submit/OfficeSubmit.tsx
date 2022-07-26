import { connect, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { submit } from 'redux-form'

import { addOfficeAction } from '../../../../store/actions/officeAction'
import { IOffice } from '../../../../store/models/officeModel'
import { SecondaryButton } from '../../Button'

export const officeSubmit = (office: IOffice, dispatch: Dispatch) => {
  dispatch(addOfficeAction({ office }))
}

export const OfficeSubmitButton = () => {
  const dispatch = useDispatch()
  return <SecondaryButton label="変更を保存する" onClick={() => dispatch(submit('office_form'))}/>
}

export default connect()(OfficeSubmitButton)
