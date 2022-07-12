import { useState } from 'react'

import alarmClockImg from '../../../../assets/images/alarm_clock.svg'
import { TableCell } from '../../Table/TableCell'
import { StyledTimeWork } from './Styled'

export interface TimeWorkCellProps {
  timeWork: number
  showTitle: boolean
}

export const TimeWorkCell = (props: TimeWorkCellProps) => {
  const { timeWork, showTitle } = props

  const [checked, setChecked] = useState(false)
  const alarmClockIcon = <img alt="sort" src={alarmClockImg} />
  return (
    <TableCell>
      <StyledTimeWork onClick={() => setChecked(!checked)}>
        {showTitle && (
          <>
            {alarmClockIcon}
            終了する
          </>
        )}
        <span>{timeWork}</span>分
      </StyledTimeWork>
    </TableCell>
  )
}
