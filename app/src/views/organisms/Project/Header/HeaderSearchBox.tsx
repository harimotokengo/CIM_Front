import bell from '../../../../assets/images/bell.svg'
import chat from '../../../../assets/images/chat.svg'
import check from '../../../../assets/images/check.svg'
import clock from '../../../../assets/images/clock.svg'
import filter from '../../../../assets/images/filter.svg'
import personCheck from '../../../../assets/images/person_check.svg'
import HeaderSearchItem from './HeaderSearchItem'
import { StyledHeaderSearchBoxWrapper, StyledHeaderSearchContents, StyledHeaderSearchDetail } from './Styled'

const personTaskIcon = (
  <img alt="person_task" src={personCheck} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
)
const taskIcon = <img alt="task" src={check} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const clockIcon = <img alt="clock" src={clock} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const bellIcon = <img alt="bell" src={bell} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const chatIcon = <img alt="chat" src={chat} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const filterIcon = <img alt="filter" src={filter} style={{ width: '21px', height: '21px', opacity: 0.5 }} />

const HeaderSearchBox = () => (
  <StyledHeaderSearchBoxWrapper>
    <StyledHeaderSearchContents>
      <HeaderSearchItem icon={taskIcon} label="作成したタスク" />
      <HeaderSearchItem icon={personTaskIcon} label="アサインされたタスク" />
      <HeaderSearchItem icon={chatIcon} label="送信したメッセージ" />
      <HeaderSearchItem icon={bellIcon} label="受信したメッセージ" />
      <HeaderSearchItem icon={clockIcon} label="“山田太郎” 検索結果" />
      <HeaderSearchItem icon={clockIcon} label="“田中次郎” 検索結果" />
    </StyledHeaderSearchContents>
    <StyledHeaderSearchDetail>
      <HeaderSearchItem icon={filterIcon} label="詳細検索" />
    </StyledHeaderSearchDetail>
  </StyledHeaderSearchBoxWrapper>
)

export default HeaderSearchBox
