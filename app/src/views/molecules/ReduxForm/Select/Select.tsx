/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import { StyledSelect } from './Styled'

type ReduxFormSelectProps = {
  category: any[]
}

export const Select = (props: WrappedFieldProps & ReduxFormSelectProps) => {
  const { input, category } = props

  return (
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
  )
}
