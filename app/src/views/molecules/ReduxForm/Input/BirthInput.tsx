import { useEffect, useState } from 'react'
import { WrappedFieldProps } from 'redux-form'

import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import { InputWrapper } from '../../../atoms/Input/InputWrapper'
import { StyledInput } from '../../../atoms/Input/Styled'
import Label from '../../../atoms/Label'

type ReduxFormInputProps = {
  label: string
  y?: string
  m?: string
  d?: string
}

export const BirthInput = (props: WrappedFieldProps & ReduxFormInputProps) => {
  const { label, y, m, d, input } = props
  const [year, setYear] = useState(y || '')
  const [month, setMonth] = useState(m || '')
  const [day, setDay] = useState(d || '')

  useEffect(() => {
    setYear(y || '')
  }, [y])

  useEffect(() => {
    setMonth(m || '')
  }, [m])

  useEffect(() => {
    setDay(d || '')
  }, [d])

  const handleYearChange = (val: string) => {
    setYear(val)
    input.onChange(`${val}-${month}-${day}`)
  }

  const handleMonthChange = (val: string) => {
    setMonth(val)
    input.onChange(`${year}-${val}-${day}`)
  }

  const handleDayChange = (val: string) => {
    setDay(val)
    input.onChange(`${year}-${month}-${val}`)
  }

  return (
    <InputWrapper label={label}>
      <Flex flexWrap="wrap" gap="10px" alignItems="center">
        <FlexItem width="100px" stretch={false}>
          <StyledInput value={year} onChange={e => handleYearChange(e.currentTarget.value)} />
        </FlexItem>
        <Label>年</Label>
        <FlexItem width="100px" stretch={false}>
          <StyledInput value={month} onChange={e => handleMonthChange(e.currentTarget.value)} />
        </FlexItem>
        <Label>月</Label>
        <FlexItem width="100px" stretch={false}>
          <StyledInput value={day} onChange={e => handleDayChange(e.currentTarget.value)} />
        </FlexItem>
        <Label>日</Label>
      </Flex>
    </InputWrapper>
  )
}
