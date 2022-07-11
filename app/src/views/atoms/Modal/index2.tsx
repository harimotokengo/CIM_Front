/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef, useImperativeHandle, useState } from 'react'

import close from '../../../assets/images/close.svg'
import { StyledModal2 } from './Styled2'

const closeIcon = <img alt="close" src={close} style={{ width: '24px', height: '24px' }} />

interface ModalProps {
  children: React.ReactNode | React.ReactNode[]
}

export interface ModalHandles2 {
  AddModal(): void
}

const Modal2 = forwardRef<ModalHandles2, ModalProps>((props, ref) => {
  const { children } = props
  const [isOpen2, setIsOpen2] = useState(false)

  useImperativeHandle(ref, () => ({
    AddModal() {
      setIsOpen2(!isOpen2)
    },
  }))

  return (
    <StyledModal2 isOpen={isOpen2} onEscapeKeydown={() => setIsOpen2(!isOpen2)}>
      {children}
      <span className="modal-close" onClick={() => setIsOpen2(false)}>
        {closeIcon}
      </span>
    </StyledModal2>
  )
})

export default Modal2
