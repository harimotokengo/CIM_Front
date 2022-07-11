import { useState } from 'react'

import switchFalse from '../../../assets/images/switch_false.svg'
import switchTrue from '../../../assets/images/switch_true.svg'

export interface ButtonSwitchProps {
  status: boolean
}

export const ButtonSwitch = (props: ButtonSwitchProps) => {
  const { status } = props
  const [statusSwitch, setStatusSwitch] = useState(status)
  const SwitchTrueIcon = (
    <img alt="status_true" src={switchTrue} onClick={() => setStatusSwitch(false)} role="presentation" />
  )
  const SwitchFalseIcon = (
    <img alt="status_false" src={switchFalse} onClick={() => setStatusSwitch(true)} role="presentation" />
  )

  return statusSwitch ? SwitchTrueIcon : SwitchFalseIcon
}

export default ButtonSwitch
