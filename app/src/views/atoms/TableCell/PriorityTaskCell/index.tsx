import { TableCell } from '../../Table/TableCell'
import { StyledPriorityTask } from './Styled'

export interface TaskPriorityProps {
  value: string
  color: string
}

export const PriorityTaskCell = (props: TaskPriorityProps) => {
  const { value, color } = props

  return (
    <TableCell>
      <StyledPriorityTask style={{ background: color }}>
        <span style={{ margin: 'auto' }}>{value}</span>
      </StyledPriorityTask>
    </TableCell>
  )
}
