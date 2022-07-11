/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef } from 'react'

import Modal2, { ModalHandles2 } from '../../../atoms/Modal/index2'
import AddOffice from '../../Clients/NewClient/AddOffice'
import { StyledHeaderAddOfficeWrapper } from './Styled'


const HeaderAddOfficeButton = () => {
  // 初期値が(null)の変数「ref」を用意
  const ref = useRef<ModalHandles2>(null)

  // string型のhandleClickを作成
  // handleClickが起動→ModalHandlesが(null)が（toggleModal）に変更
  const handleClick = () => {
    ref.current?.AddModal()
  }

  return (
    <>
      <StyledHeaderAddOfficeWrapper>
        <span onClick={handleClick}>
          <p>事務所登録</p>
        </span>
      </StyledHeaderAddOfficeWrapper>
      <Modal2 ref={ref}>
        <AddOffice onCancel={() => handleClick ()} />
      </Modal2>
    </>
  )
}

export default HeaderAddOfficeButton
