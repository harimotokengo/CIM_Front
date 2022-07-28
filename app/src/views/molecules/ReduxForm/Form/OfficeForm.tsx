/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ReactNode, useEffect } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { IOffice } from '../../../../store/models/officeModel'
import { officeSubmit } from '../Submit/OfficeSubmit'
import { StyledForm } from './Styled'

type IProps = {
  children: ReactNode | ReactNode[]
}

type IFormProps = InjectedFormProps<IOffice, IProps> & IProps

const initialOffice: IOffice = {
  name: "",
  phone: "",
  postcode: "",
  address: "",
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

const OfficeForm = ({ initialize, children, ...rest }: IFormProps) => {
  useEffect(() => {
    initialize(initialOffice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <StyledForm {...rest}>{children}</StyledForm>
}

// クライアント登録（client_form）のデータ
export default reduxForm<IOffice, IProps>({
  form: 'office_form',
  // enableReinitialize: true,
  onSubmit: officeSubmit,
  // asyncValidate: (_: any) => new Promise(() => {}),
  // asyncChangeFields: ['name', 'first_name', 'name_kana', 'first_name_kana'],
})(OfficeForm)

// IClient=クライアントのデータをもっている
