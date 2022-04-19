/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import { StyledInputLabel, StyledInputWrapper } from '../Input/Styled'
import { StyledSelect } from './Styled'

type ReduxFormSelectProps = {
  label: string
  category: any[]
}

export const ReduxFormSelect = (props: WrappedFieldProps & ReduxFormSelectProps) => {
  const { label, input, category } = props

  return (
    <StyledInputWrapper>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledSelect {...input}>
        <option value="" disabled>
          {}
        </option>
        {category.map(x => (
          <option key={x} value={x}>
            {x}
          </option>
        ))}
      </StyledSelect>
    </StyledInputWrapper>
  )
}
