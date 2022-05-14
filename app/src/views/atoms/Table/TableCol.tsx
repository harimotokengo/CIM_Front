import { ReactNode } from 'react'

import { StyledTableCol } from './Styled'

export interface TableColProps {
  children: ReactNode | ReactNode[]
  header?: boolean
  width?: string
}

export const TableCol = ({ children, ...rest }: TableColProps) => <StyledTableCol {...rest}>{children}</StyledTableCol>
