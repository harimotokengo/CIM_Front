import plusCircle from '../../../../assets/images/plus_circle.svg'
import { Card } from '../../../atoms/Card'
import Flex from '../../../atoms/Flex'
import { FlexItem } from '../../../atoms/FlexItem'
import { Input } from '../../../atoms/Input'
import Label from '../../../atoms/Label'
import Title from '../../../atoms/Title'

const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />

const PhoneCard = () => {
  const onValueChange = (value: string) => {
    console.log(value)
  }

  return (
    <>
      <Title variant="sub">電話番号</Title>
      <Card width="534px">
        <Flex container flexWrap="wrap" gap="10px">
          <FlexItem width="80px">
            <Input label="種別" value="" onValueChange={onValueChange} />
          </FlexItem>
          <FlexItem width="200px">
            <Input label="電話番号" value="" onValueChange={onValueChange} />
          </FlexItem>
          <FlexItem width="100px">
            <Input label="内線番号" value="" onValueChange={onValueChange} />
          </FlexItem>
          <FlexItem width="300px">
            <Input label="メモ" value="" onValueChange={onValueChange} />
          </FlexItem>
        </Flex>
      </Card>
      <Label variant="icon" icon={plusCircleIcon}>
        電話番号を追加
      </Label>
    </>
  )
}

export default PhoneCard
