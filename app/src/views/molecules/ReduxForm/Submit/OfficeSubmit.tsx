import { connect, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { submit } from 'redux-form'

import { postClientRequest } from '../../../../store/actions/clientAction'
import { IClient } from '../../../../store/models/clientModel'
import { SecondaryButton } from '../../Button'

export const clientSubmit = (client: IClient, dispatch: Dispatch) => {
  dispatch(postClientRequest({ client }))
}

export const OfficeSubmitButton = () => {
  const dispatch = useDispatch()
  return <SecondaryButton label="変更を保存する" onClick={() => dispatch(submit('client_form'))} />
}

export default connect()(OfficeSubmitButton)
