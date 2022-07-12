/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import { StyledSelect } from './Styled'

export type ReduxFormSelectProps = {
  width?: string
  category: string[] | number[]
}

export const Select = (props: WrappedFieldProps & ReduxFormSelectProps) => {
  const { input, category, ...rest } = props

  return (
    <StyledSelect {...input} {...rest}>
      <option value="" disabled>
        {}
      </option>
      {category.map(categoryItem => (
        <option key={categoryItem} value={categoryItem}>
          {categoryItem}
        </option>
      ))}
    </StyledSelect>
  )
}
