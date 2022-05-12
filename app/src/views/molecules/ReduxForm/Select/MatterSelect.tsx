/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { WrappedFieldProps } from 'redux-form'

import { Category, SelectKV } from '../../../atoms/ReduxForm/Select/SelectKV'
import { SelectWrapper } from '../../../atoms/ReduxForm/Select/SelectWrapper'

type ReduxFormSelectProps = {
  label: string
  category: Category[]
}

export const MatterSelect = (props: WrappedFieldProps & ReduxFormSelectProps) => {
  const { label, category, ...rest } = props

  return (
    <SelectWrapper label={label}>
      <SelectKV category={category} {...rest} />
    </SelectWrapper>
  )
}
