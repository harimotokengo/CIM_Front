import styled, { css } from 'styled-components'

import { TitleProps } from '.'

export const StyledTitle = styled.label<TitleProps>`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;

  color: #192a3e;

  padding: 5px 0;

  ${props => props.variant === 'sub' && StyledSubTitle}
`

const StyledSubTitle = css`
  font-weight: 350;
  font-size: 16px;
  line-height: 24px;

  color: #343a40;
`
