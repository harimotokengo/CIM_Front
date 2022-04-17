import { useState } from 'react'

import Flex from '../../atoms/Flex'
import { FlexItem } from '../../atoms/FlexItem'
import { Input } from '../../atoms/Input'
import { InputWrapper } from '../../atoms/Input/InputWrapper'
import Label from '../../atoms/Label'

export const BirthInput = () => {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  return (
    <InputWrapper label="生年月日">
      <Flex container flexWrap="wrap" gap="10px" alignItems="center">
        <FlexItem width="100px" stretch={false}>
          <Input value={year} onValueChange={value => setYear(value)} />
        </FlexItem>
        <Label>年</Label>
        <FlexItem width="100px" stretch={false}>
          <Input value={month} onValueChange={value => setMonth(value)} />
        </FlexItem>
        <Label>月</Label>
        <FlexItem width="100px" stretch={false}>
          <Input value={day} onValueChange={value => setDay(value)} />
        </FlexItem>
        <Label>日</Label>
      </Flex>
    </InputWrapper>
  )
}
