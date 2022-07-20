import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  min-width: 700px;
  min-height: 500px;
  height: 90%;

  position: relative;

  .modal-close {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
  }
`
