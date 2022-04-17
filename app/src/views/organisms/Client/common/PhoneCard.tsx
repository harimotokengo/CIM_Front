import { useDispatch, useSelector } from 'react-redux'

import { PHONE_CATEGORY } from '../../../../constants/clients'
import { setClient } from '../../../../store/actions/clientAction'
import { getClientSelector } from '../../../../store/selectors/clientSelector'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import { InputWithLabel } from '../../../atoms/Input/InputWithLabel'
import { SelectWithLabel } from '../../../atoms/Select/SelectWithLabel'
import VariableCard from '../../../molecules/Card/VariableCard'

const keys = [100, 200, 300, 400, 999]
const category = PHONE_CATEGORY

const PhoneCard = () => {
  const dispatch = useDispatch()
  const client = useSelector(getClientSelector)

  return (
    <VariableCard label="電話番号">
      <Flex container alignItems="flex-start" flexWrap="wrap" gap="10px">
        <FlexItem width="80px" stretch={false}>
          <SelectWithLabel
            label="種別"
            value=""
            keys={keys}
            category={category}
            onValueChange={value => dispatch(setClient({ client: { ...client, ...{ maiden_name: value } } }))}
          />
        </FlexItem>
        <FlexItem width="auto">
          <InputWithLabel
            label="電話番号"
            value=""
            onValueChange={value => dispatch(setClient({ client: { ...client, ...{ maiden_name: value } } }))}
          />
        </FlexItem>
        <FlexItem width="100px" stretch={false}>
          <InputWithLabel
            label="内線番号"
            value=""
            onValueChange={value => dispatch(setClient({ client: { ...client, ...{ maiden_name: value } } }))}
          />
        </FlexItem>
        <FlexItem width="auto">
          <InputWithLabel
            label="メモ"
            value=""
            onValueChange={value => dispatch(setClient({ client: { ...client, ...{ maiden_name: value } } }))}
          />
        </FlexItem>
      </Flex>
    </VariableCard>
  )
}

export default PhoneCard
