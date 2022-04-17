import { ADDRESS_CATEGORY } from '../../../../constants/clients'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import { InputWithLabel } from '../../../atoms/Input/InputWithLabel'
import { SelectWithLabel } from '../../../atoms/Select/SelectWithLabel'
import VariableCard from '../../../molecules/Card/VariableCard'

const keys = [100, 200, 300, 400, 999]
const category = ADDRESS_CATEGORY

const AddressCard = () => {
  const onValueChange = (value: string) => {
    console.log(value)
  }

  return (
    <VariableCard label="住所">
      <Flex container flexWrap="wrap" gap="10px">
        <FlexItem width="80px" stretch={false}>
          <SelectWithLabel label="種別" value="" keys={keys} category={category} onValueChange={onValueChange} />
        </FlexItem>
        <FlexItem width="auto">
          <InputWithLabel label="郵便番号" value="" onValueChange={onValueChange} />
        </FlexItem>
        <FlexItem width="auto">
          <InputWithLabel label="都道府県" value="" onValueChange={onValueChange} />
        </FlexItem>
      </Flex>
      <Flex container flexWrap="wrap" gap="10px" mt="10px">
        <FlexItem width="100%">
          <InputWithLabel label="住所" value="" onValueChange={onValueChange} />
        </FlexItem>
      </Flex>
    </VariableCard>
  )
}

export default AddressCard
