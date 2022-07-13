import { useRef, useState } from 'react'

import check from '../../../../assets/images/check.svg'
import personLine from '../../../../assets/images/person_lines_fill.svg'
import personPlus from '../../../../assets/images/person_plus.svg'
import Flex from '../../../atoms/Flex'
import Modal, { ModalHandles } from '../../../atoms/Modal'
// import Title from '../../../atoms/Title'
import NewClient from '../../Clients/NewClient'
import NewTask from '../../Clients/NewTask'
import HeaderAddItem from './HeaderAddItem'
import { StyledHeaderAddBoxWrapper, StyledHeaderAddContents } from './Styled'

const taskIcon = <img alt="task" src={check} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const registClientIcon = (
  <img alt="person_line" src={personLine} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
)
const addClientIcon = <img alt="person_plus" src={personPlus} style={{ width: '21px', height: '21px', opacity: 0.5 }} />

const HeaderAddBox = () => {
  const headerAddItemRef = useRef<ModalHandles>(null)
  const [labelCurrent, setLabelCurrent] = useState('')

  const handleClick = (label: string) => {
    setLabelCurrent(label)
    headerAddItemRef.current?.toggleModal()
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
      <Modal ref={headerAddItemRef}>
        {labelCurrent === 'タスク作成' && (
          <Flex flexDirection="column" layout="fill" style={{ margin: '5%' }}>
            {/* <Title style={{ justifyContent: 'center', margin: 20 }}>業務段階のタイトル</Title> */}
            <NewTask widthLabel="100px" />
          </Flex>
        )}
        {labelCurrent === 'クライアント登録' && <NewClient onCancel={() => handleClick('クライアント登録')} />}
        {labelCurrent === 'メンバーを招待' && <div>メンバーを招待</div>}
      </Modal>
    </>
  )
}

export default HeaderAddBox
