import { connect, useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { submit } from 'redux-form'

import { patchClientRequest } from '../../../../store/actions/clientAction'
import { IClient } from '../../../../store/models/clientModel'
import Button from '../../Button'

export const clientEditSubmit = (client: IClient, dispatch: Dispatch) => {
  dispatch(patchClientRequest({ client }))
}

export const ClientEditSubmitButton = () => {
  const dispatch = useDispatch()
  return <Button variant="edit" label="変更内容を保存" onClick={() => dispatch(submit('client_form_edit'))} />
}

export default connect()(ClientEditSubmitButton)
