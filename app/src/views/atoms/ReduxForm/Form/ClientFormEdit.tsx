/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ReactNode } from 'react'
import { connect } from 'react-redux'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { IClient } from '../../../../store/models/clientModel'
import { AppState } from '../../../../store/rootReducer'
import { clientEditSubmit } from '../Submit/ClientEditSubmit'
import { StyledForm } from './Styled'

type IProps = {
  children: ReactNode | ReactNode[]
}

type IFormProps = InjectedFormProps<IClient, IProps> & IProps

const ClientFormEdit = ({ children, ...rest }: IFormProps) => <StyledForm {...rest}>{children}</StyledForm>

const mapStateToProps = (state: AppState) => ({ initialValues: state.client.client })

export default connect(mapStateToProps)(
  reduxForm<IClient, IProps>({
    form: 'client_form_edit', // a unique identifier for this form
    enableReinitialize: true,
    onSubmit: clientEditSubmit,
  })(ClientFormEdit)
)
