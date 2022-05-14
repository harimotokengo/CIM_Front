import { connect, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { submit } from 'redux-form'

import { postClientRequest } from '../../../../store/actions/clientAction'
import { IClient } from '../../../../store/models/clientModel'
import { PrimaryRedButton } from '../../Button'

export const clientSubmit = (client: IClient, dispatch: Dispatch) => {
  dispatch(postClientRequest({ client }))
}

export const ClientSubmitButton = () => {
  const dispatch = useDispatch()
  return <PrimaryRedButton label="新規登録" onClick={() => dispatch(submit('client_form'))} />
}

export default connect()(ClientSubmitButton)
