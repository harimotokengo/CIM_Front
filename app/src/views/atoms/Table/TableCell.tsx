import { ReactNode } from 'react'

import { StyledCell } from './Styled'

interface TableCellProps {
  children: ReactNode | ReactNode[]
}

export const TableCell = ({ children }: TableCellProps) => <StyledCell>{children}</StyledCell>
