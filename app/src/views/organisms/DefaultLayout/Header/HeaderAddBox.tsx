import { useRef } from 'react'

import check from '../../../../assets/images/check.svg'
import personLine from '../../../../assets/images/person_lines_fill.svg'
import personPlus from '../../../../assets/images/person_plus.svg'
import Modal, { ModalHandles } from '../../../atoms/Modal'
import NewClient from '../../Clients/NewClient'
import HeaderAddItem from './HeaderAddItem'
import { StyledHeaderAddBoxWrapper, StyledHeaderAddContents } from './Styled'

const taskIcon = <img alt="task" src={check} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const registClientIcon = (
  <img alt="person_line" src={personLine} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
)
const addClientIcon = <img alt="person_plus" src={personPlus} style={{ width: '21px', height: '21px', opacity: 0.5 }} />

const HeaderAddBox = () => {
  const ref = useRef<ModalHandles>(null)

  const handleClick = (label: string) => {
    if (label === 'クライアント登録') {
      ref.current?.toggleModal()
    }
  }

  return (
    <>
      <StyledHeaderAddBoxWrapper>
        <StyledHeaderAddContents>
          <HeaderAddItem icon={taskIcon} label="タスク作成" onClick={handleClick} />
          <HeaderAddItem icon={registClientIcon} label="クライアント登録" onClick={handleClick} />
          <HeaderAddItem icon={addClientIcon} label="メンバーを招待" onClick={handleClick} />
        </StyledHeaderAddContents>
      </StyledHeaderAddBoxWrapper>
      <Modal ref={ref}>
        <NewClient onCancel={() => handleClick('クライアント登録')} />
      </Modal>
    </>
  )
}

export default HeaderAddBox
