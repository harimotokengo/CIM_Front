import { useState } from 'react'

import circleCheckImg from '../../../../assets/images/circle_check.svg'
import circleCheckedImg from '../../../../assets/images/circle_checked.svg'
import { TableCell } from '../../Table/TableCell'
import { StyledNameTask } from './Styled'

export interface ClientListTaskCellProps {
  name: string
}

export const ClientListTaskCell = (props: ClientListTaskCellProps) => {
  const { name } = props

  const [checked, setChecked] = useState(false)
  const circleCheckIcon = <img alt="icon_check" src={circleCheckImg} />
  const circleCheckedIcon = <img alt="icon_check" src={circleCheckedImg} />
  return (
    <TableCell>
      <StyledNameTask onClick={() => setChecked(!checked)}>
        {checked ? circleCheckedIcon : circleCheckIcon}
        {name}
      </StyledNameTask>
    </TableCell>
  )
}
