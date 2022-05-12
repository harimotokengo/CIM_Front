/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import { StyledSelect } from './Styled'

export interface Category {
  id: number
  name: string
}

type ReduxFormSelectProps = {
  category: Category[]
}

export const SelectKV = (props: WrappedFieldProps & ReduxFormSelectProps) => {
  const { input, category } = props

  return (
    <StyledSelect {...input}>
      <option value="0" disabled>
        {}
      </option>
      {category.map(x => (
        <option key={x.id} value={x.id}>
          {x.name}
        </option>
      ))}
    </StyledSelect>
  )
}
