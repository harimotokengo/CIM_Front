import styled from 'styled-components'

import { baseSpacing, baseStyles } from '../Base'

export const StyledGroupButtonCheck = styled.div`
  padding: 0.5rem 1rem;
  border-color: transparent;
  transition: background-color 0.1s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  .ch-icon {
    width: 21px;
    height: 21px;
    margin-right: 0.25rem;
    cursor: pointer;
  }
  .listOption {
    position: absolute;
    top: 40px;
    background: white !important;
    padding: 10px 20px;
    box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.176);
    width: max-content;
    span {
      padding: 5px;
    }
  }
  .ch-label {
    cursor: pointer;
  }

  ${baseSpacing}
  ${baseStyles}
`
