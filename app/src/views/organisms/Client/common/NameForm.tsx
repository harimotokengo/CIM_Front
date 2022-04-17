import { useDispatch, useSelector } from 'react-redux'

import arrowClockwise from '../../../../assets/images/arrow_clockwise.svg'
import { setClient } from '../../../../store/actions/clientAction'
import { getClientSelector } from '../../../../store/selectors/clientSelector'
import Flex from '../../../atoms/Flex'
import { InputWithLabel } from '../../../atoms/Input/InputWithLabel'
import Label from '../../../atoms/Label'

const arrowClockwiseIcon = <img alt="arrowClockwise" src={arrowClockwise} style={{ width: '21px', height: '21px' }} />

export const NameForm = () => {
  const dispatch = useDispatch()
  const client = useSelector(getClientSelector)

  return (
    <>
      <Flex layout="equal-columns" gap="24px" style={{ width: '534px' }}>
        <InputWithLabel
          label="姓"
          value={client.maiden_name}
          onValueChange={value => dispatch(setClient({ client: { ...client, ...{ maiden_name: value } } }))}
        />
        <InputWithLabel
          label="名"
          value={client.first_name}
          onValueChange={value => dispatch(setClient({ client: { ...client, ...{ first_name: value } } }))}
        />
      </Flex>
      <Flex layout="equal-columns" gap="24px" style={{ width: '534px' }}>
        <InputWithLabel
          label="せい"
          value={client.maiden_name_kana}
          onValueChange={value => dispatch(setClient({ client: { ...client, ...{ maiden_name_kana: value } } }))}
        />
        <InputWithLabel
          label="めい"
          value={client.first_name_kana}
          onValueChange={value => dispatch(setClient({ client: { ...client, ...{ first_name_kana: value } } }))}
        />
      </Flex>
      <Label variant="icon" icon={arrowClockwiseIcon}>
        コンフリクトチェック
      </Label>
    </>
  )
}
