import arrowClockwise from '../../../../assets/images/arrow_clockwise.svg'
import Flex from '../../../atoms/Flex'
import { InputWithLabel } from '../../../atoms/Input/InputWithLabel'
import Label from '../../../atoms/Label'
import Title from '../../../atoms/Title'
import AddressCard from '../common/AddressCard'
import EmailCard from '../common/EmailCard'
import { NameForm } from '../common/NameForm'
import PhoneCard from '../common/PhoneCard'

const arrowClockwiseIcon = <img alt="arrowClockwise" src={arrowClockwise} style={{ width: '21px', height: '21px' }} />

const CorpProfile = () => {
  const onValueChange = () => console.log('onValueChanged')

  return (
    <>
      <Flex layout="equal-columns" gap="24px" style={{ width: '534px' }}>
        <InputWithLabel label="企業名" value="" onValueChange={onValueChange} />
      </Flex>
      <Flex layout="equal-columns" gap="24px" style={{ width: '534px' }}>
        <InputWithLabel label="かな" value="" onValueChange={onValueChange} />
      </Flex>
      <Label variant="icon" icon={arrowClockwiseIcon}>
        コンフリクトチェック
      </Label>
      <Title variant="sub">代表者</Title>
      <NameForm />
      <PhoneCard />
      <EmailCard />
      <AddressCard />
    </>
  )
}

export default CorpProfile
