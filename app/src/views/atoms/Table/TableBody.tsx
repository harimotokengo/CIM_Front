import { ReactNode } from 'react'

import { StyledTableBody } from './Styled'

interface TableBodyProps {
  children: ReactNode | ReactNode[]
}

export const TableBody = ({ children }: TableBodyProps) => <StyledTableBody>{children}</StyledTableBody>
