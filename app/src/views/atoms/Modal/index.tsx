/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { forwardRef, useImperativeHandle, useState } from 'react'

// import close from '../../../assets/images/close.svg'
import { StyledModal } from './Styled'

// const closeIcon = <img alt="plusCircle" src={close} style={{ width: '21px', height: '21px' }} />

interface ModalProps {
  children: React.ReactNode | React.ReactNode[]
}

export interface ModalHandles {
  toggleModal(): void
}

const Modal = forwardRef<ModalHandles, ModalProps>((props, ref) => {
  const { children } = props
  const [isOpen, setIsOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    toggleModal() {
      console.log(isOpen)
      console.log(!isOpen)
      setIsOpen(!isOpen)
    },
  }))

  return (
    <div style={{ height: '80%' }}>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={() => setIsOpen(!isOpen)}
        onEscapeKeydown={() => setIsOpen(!isOpen)}
      >
        {children}
      </StyledModal>
    </div>
  )
})

export default Modal
