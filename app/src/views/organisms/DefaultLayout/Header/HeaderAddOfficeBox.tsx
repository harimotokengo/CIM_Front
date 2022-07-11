import { useRef } from 'react'

import check from '../../../../assets/images/check.svg'
import Modal2,{ ModalHandles2 } from '../../../atoms/Modal/index2'
import AddOffice from '../../Clients/NewClient/AddOffice'
import HeaderAddItem from './HeaderAddItem'
import { StyledHeaderAddBoxWrapper, StyledHeaderAddContents } from './Styled'

const taskIcon = <img alt="task" src={check} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
// ↓なんで上と書き方が違う？？


const HeaderAddOfficeBox = () => {
  // 初期値が(null)の変数「ref」を用意
  const ref = useRef<ModalHandles2>(null)

  // string型のhandleClickを作成
  // ラベル＝クラインアント登録の場合、初期値がtoggleModal()に変更？？？
  const handleClick = (label: string) => {
    if (label === '事務所登録') {
      ref.current?.AddModal()
    }
  }

  return (
    <>
      <StyledHeaderAddBoxWrapper>
        <StyledHeaderAddContents>
          <HeaderAddItem icon={taskIcon} label="事務所登録" onClick={handleClick} />
        </StyledHeaderAddContents>
      </StyledHeaderAddBoxWrapper>
      <Modal2 ref={ref}>
        <AddOffice onCancel={() => handleClick('事務所登録')} />
      </Modal2>
    </>
  )
}

export default HeaderAddOfficeBox
