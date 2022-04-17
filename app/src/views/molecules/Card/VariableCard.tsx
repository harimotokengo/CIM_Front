import { ReactNode, useCallback, useState } from 'react'

import plusCircle from '../../../assets/images/plus_circle.svg'
import { Card } from '../../atoms/Card'
import Label from '../../atoms/Label'
import Title from '../../atoms/Title'

const plusCircleIcon = <img alt="plusCircle" src={plusCircle} style={{ width: '21px', height: '21px' }} />

type VariableCardProps = {
  label: string
  children: ReactNode | ReactNode[]
}

const VariableCard = (props: VariableCardProps) => {
  const { label, children } = props
  const [cardCount, setCardCount] = useState(1)

  const Cards = useCallback(
    (element: ReactNode) =>
      [...Array(cardCount).keys()].map(x => (
        <Card key={x} width="534px" closeButton onClosed={() => setCardCount(cardCount - 1)}>
          {element}
        </Card>
      )),
    [cardCount]
  )

  return (
    <>
      <Title variant="sub">{label}</Title>
      {Cards(children)}
      <Label variant="icon" icon={plusCircleIcon} onClick={() => setCardCount(cardCount + 1)}>
        {label}を追加
      </Label>
    </>
  )
}

export default VariableCard
