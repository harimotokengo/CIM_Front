import check from '../../../../assets/images/check.svg'
import personLine from '../../../../assets/images/person_lines_fill.svg'
import personPlus from '../../../../assets/images/person_plus.svg'
import HeaderAddItem from './HeaderAddItem'
import { StyledHeaderAddBoxWrapper, StyledHeaderAddContents } from './Styled'

const taskIcon = <img alt="task" src={check} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const registClientIcon = (
  <img alt="person_line" src={personLine} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
)
const addClientIcon = <img alt="person_plus" src={personPlus} style={{ width: '21px', height: '21px', opacity: 0.5 }} />

const HeaderAddBox = () => (
  <StyledHeaderAddBoxWrapper>
    <StyledHeaderAddContents>
      <HeaderAddItem icon={taskIcon} label="タスク作成" />
      <HeaderAddItem icon={registClientIcon} label="クライアント登録" />
      <HeaderAddItem icon={addClientIcon} label="メンバーを招待" />
    </StyledHeaderAddContents>
  </StyledHeaderAddBoxWrapper>
)

export default HeaderAddBox
