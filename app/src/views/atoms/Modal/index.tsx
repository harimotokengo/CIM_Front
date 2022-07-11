/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef, useImperativeHandle, useState } from 'react'

import close from '../../../assets/images/close.svg'
import { StyledModal } from './Styled'

const closeIcon = <img alt="close" src={close} style={{ width: '24px', height: '24px' }} />

interface ModalProps {
  children: React.ReactNode | React.ReactNode[]
}

export interface ModalHandles {
  toggleModal(): void
}

// toggleをしたいからRefを参照してる
const Modal = forwardRef<ModalHandles, ModalProps>((props, ref) => {
  const { children } = props
  const [isOpen, setIsOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    toggleModal() {
      setIsOpen(!isOpen)
    },
  }))

  return (
    <StyledModal isOpen={isOpen} onEscapeKeydown={() => setIsOpen(!isOpen)}>
      {children}
      <span className="modal-close" onClick={() => setIsOpen(false)}>
        {closeIcon}
      </span>
    </StyledModal>
  )
})

export default Modal
