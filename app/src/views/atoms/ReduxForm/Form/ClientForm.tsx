/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ReactNode } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { IClient } from '../../../../store/models/clientModel'
import { clientSubmit } from '../Submit/ClientSubmit'
import { StyledForm } from './Styled'

type IProps = {
  children: ReactNode | ReactNode[]
}

type IFormProps = InjectedFormProps<IClient, IProps> & IProps

const ClientForm = ({ children, ...rest }: IFormProps) => <StyledForm {...rest}>{children}</StyledForm>

export default reduxForm<IClient, IProps>({
  form: 'client_form',
  onSubmit: clientSubmit,
})(ClientForm)
