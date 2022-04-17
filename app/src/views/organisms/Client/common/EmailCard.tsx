import { EMAIL_CATEGORY } from '../../../../constants/clients'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import { InputWithLabel } from '../../../atoms/Input/InputWithLabel'
import { SelectWithLabel } from '../../../atoms/Select/SelectWithLabel'
import VariableCard from '../../../molecules/Card/VariableCard'

const keys = [100, 200, 300, 400, 999]
const category = EMAIL_CATEGORY

const EmailCard = () => {
  const onValueChange = (value: string) => {
    console.log(value)
  }

  return (
    <VariableCard label="メールアドレス">
      <Flex container alignItems="flex-start" flexWrap="wrap" gap="10px">
        <FlexItem width="80px" stretch={false}>
          <SelectWithLabel label="種別" value="" keys={keys} category={category} onValueChange={onValueChange} />
        </FlexItem>
        <FlexItem width="auto">
          <InputWithLabel label="メールアドレス" value="" onValueChange={onValueChange} />
        </FlexItem>
      </Flex>
      <Flex container flexWrap="wrap" gap="10px" mt="10px">
        <FlexItem width="100%">
          <InputWithLabel label="メモ" value="" onValueChange={onValueChange} />
        </FlexItem>
      </Flex>
    </VariableCard>
  )
}

export default EmailCard
