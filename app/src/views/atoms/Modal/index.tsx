/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef, useImperativeHandle, useState } from 'react'

import close from '../../../assets/images/close.svg'
import { StyledModal } from './Styled'

const closeIcon = <img alt="close" src={close} style={{ width: '24px', height: '24px' }} />

export interface ModalProps {
  width?: string
  title?: string
  iconCloseStyle?: React.CSSProperties
  children: React.ReactNode | React.ReactNode[]
}

export interface ModalHandles {
  toggleModal(): void
}

const Modal = forwardRef<ModalHandles, ModalProps>((props, ref) => {
  const { title, iconCloseStyle, children, ...rest } = props
  const [isOpen, setIsOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    toggleModal() {
      setIsOpen(!isOpen)
    },
  }))

  return (
    <StyledModal {...rest} isOpen={isOpen} onEscapeKeydown={() => setIsOpen(!isOpen)}>
      {children}
      <span className="modal-title">{title}</span>
      <span className="modal-close" style={iconCloseStyle} onClick={() => setIsOpen(false)}>
        {closeIcon}
      </span>
    </StyledModal>
  )
})

export default Modal
