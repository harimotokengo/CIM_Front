/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import { Select } from './Select'
import { SelectWrapper } from './SelectWrapper'

type ReduxFormSelectProps = {
  label: string
  category: any[]
}

export const ReduxFormSelect = (props: WrappedFieldProps & ReduxFormSelectProps) => {
  const { label, category, ...rest } = props

  return (
    <SelectWrapper label={label}>
      <Select category={category} {...rest} />
    </SelectWrapper>
  )
}
