import { TableCell } from '../../Table/TableCell'
import { StyledDate, StyledDateWrapper, StyledIcon, StyledInfoWrapper, StyledName } from './Styled'

export interface MattersProjectCellProps {
  matterGenreId: number
  name: string
  startDate: string
  updateDate: string
}

const MattersProjectCell = (props: MattersProjectCellProps) => {
  const { matterGenreId, name, startDate, updateDate } = props

  return (
    <TableCell>
      <StyledIcon matterGenreId={matterGenreId} />
      <StyledInfoWrapper>
        <StyledName>{`${name}＋分野＋追加`}</StyledName>
        <StyledDateWrapper>
          {startDate && <StyledDate label="受任">{startDate}</StyledDate>}
          {updateDate && <StyledDate label="更新">{updateDate}</StyledDate>}
        </StyledDateWrapper>
      </StyledInfoWrapper>
    </TableCell>
  )
}

export default MattersProjectCell
