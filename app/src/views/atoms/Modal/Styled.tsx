import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  min-width: 1000px;
  min-height:500px;
  height: 90%;

  position: relative;

  .modal-close {
    position: absolute;
    top: 10px;
    right: 20px;
  }
`
