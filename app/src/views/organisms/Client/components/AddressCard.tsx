import plusCircle from '../../../../assets/images/plus_circle.svg'
import { Card } from '../../../atoms/Card'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import { Input } from '../../../atoms/Input'
import Label from '../../../atoms/Label'
import Title from '../../../atoms/Title'

const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />

const AddressCard = () => {
  const onValueChange = (value: string) => {
    console.log(value)
  }

  return (
    <>
      <Title variant="sub">住所</Title>
      <Card width="534px">
        <Flex container flexWrap="wrap" gap="10px">
          <FlexItem width="80px" stretch={false}>
            <Input label="種別" value="" onValueChange={onValueChange} />
          </FlexItem>
        </Flex>
        <Flex container flexWrap="wrap" gap="10px" mt="10px">
          <FlexItem width="45%">
            <Input label="郵便番号" value="" onValueChange={onValueChange} />
          </FlexItem>
          <FlexItem width="45%">
            <Input label="都道府県" value="" onValueChange={onValueChange} />
          </FlexItem>
          <FlexItem width="100%">
            <Input label="住所" value="" onValueChange={onValueChange} />
          </FlexItem>
        </Flex>
      </Card>
      <Label variant="icon" icon={plusCircleIcon}>
        住所を追加
      </Label>
    </>
  )
}

export default AddressCard
