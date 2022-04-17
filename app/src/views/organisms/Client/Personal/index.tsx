import { useDispatch, useSelector } from 'react-redux'

import arrowClockwise from '../../../../assets/images/arrow_clockwise.svg'
import { setClient } from '../../../../store/actions/clientAction'
import { getClientSelector } from '../../../../store/selectors/clientSelector'
import Flex from '../../../atoms/Flex'
import { Input } from '../../../atoms/Input'
import Label from '../../../atoms/Label'
import AddressCard from '../components/AddressCard'
import PhoneCard from '../components/PhoneCard'

const arrowClockwiseIcon = <img alt="arrowClockwise" src={arrowClockwise} style={{ width: '21px', height: '21px' }} />

const PersonalForm = () => {
  const dispatch = useDispatch()
  const client = useSelector(getClientSelector)

  const onValueChange = (value: string) => {
    client.name = value
    dispatch(setClient({ client }))
  }

  return (
    <>
      <Flex layout="equal-columns" gap="24px" style={{ width: '534px' }}>
        <Input label="姓" value={client.name || ''} onValueChange={onValueChange} />
        <Input label="名" value="" onValueChange={onValueChange} />
      </Flex>
      <Flex layout="equal-columns" gap="24px" style={{ width: '534px' }}>
        <Input label="せい" value="" onValueChange={onValueChange} />
        <Input label="めい" value="" onValueChange={onValueChange} />
      </Flex>
      <Label variant="icon" icon={arrowClockwiseIcon}>
        コンフリクトチェック
      </Label>
      <PhoneCard />
      <Input label="案件区分" value="" style={{ width: '200px' }} onValueChange={onValueChange} />
      <Input label="ステータス" value="" style={{ width: '200px' }} onValueChange={onValueChange} />
      <Input label="共有" value="" style={{ width: '200px' }} onValueChange={onValueChange} />
      <AddressCard />
    </>
  )
}

export default PersonalForm
