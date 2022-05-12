/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ReactNode, useEffect } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { IClient } from '../../../../store/models/clientModel'
import { clientSubmit } from '../Submit/ClientSubmit'
import { StyledForm } from './Styled'

type IProps = {
  children: ReactNode | ReactNode[]
}

type IFormProps = InjectedFormProps<IClient, IProps> & IProps

const initialClient: IClient = {
  name: '',
  name_kana: '',
  first_name: '',
  first_name_kana: '',
  profile: '',
  maiden_name: '',
  maiden_name_kana: '',
  indentification_number: 0,
  birth_date: '',
  client_type_id: '',
  archive: false,
  matters_attributes: [
    {
      user_id: 0,
      matter_genre_id: 0,
      matter_status_id: 0,
      start_date: '',
      finish_date: '',
      _destroy: false,
      matter_joins_attributes: [
        {
          belong_side_id: 1,
          _destroy: false,
        },
      ],
      folder_urls_attributes: [
        {
          name: '',
          url: '',
          _destroy: false,
        },
      ],
    },
  ],
}

// // eslint-disable-next-line no-promise-executor-return
// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const asyncValidate = (values: any, dispatch: Dispatch, props: any, blurredField: string) =>
//   sleep(500).then(() => {
//     /* eslint-disable @typescript-eslint/no-unsafe-member-access,
//     no-throw-literal, @typescript-eslint/no-unsafe-assignment */
//     let errors: any = {}
//     if (blurredField === 'name' && (!values.name || values.name === '')) {
//       errors = { ...errors, ...{ name: 'error' } }
//     }
//     if (blurredField === 'first_name' && (!values.first_name || values.first_name === '')) {
//       errors = { ...errors, ...{ first_name: 'error' } }
//     }
//     if (blurredField === 'name_kana' && (!values.name_kana || values.name_kana === '')) {
//       errors = { ...errors, ...{ name_kana: 'error' } }
//     }
//     if (blurredField === 'first_name_kana' && (!values.first_name_kana || values.first_name_kana === '')) {
//       errors = { ...errors, ...{ first_name_kana: 'error' } }
//     }
//     console.warn(errors)
//     throw { ...errors }
//     /* eslint-enable @typescript-eslint/no-unsafe-member-access, no-throw-literal */
//   })

const ClientForm = ({ initialize, children, ...rest }: IFormProps) => {
  useEffect(() => {
    initialize(initialClient)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <StyledForm {...rest}>{children}</StyledForm>
}

export default reduxForm<IClient, IProps>({
  form: 'client_form',
  // enableReinitialize: true,
  onSubmit: clientSubmit,
  // asyncValidate: (_: any) => new Promise(() => {}),
  // asyncChangeFields: ['name', 'first_name', 'name_kana', 'first_name_kana'],
})(ClientForm)
