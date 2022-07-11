import { useEffect, useRef, useState } from 'react'

import radioChecked from '../../../assets/images/check.svg'
import checkBoxChecked from '../../../assets/images/check_box_checked.svg'
import checkBoxNotCheck from '../../../assets/images/check_box_not_check.svg'
import { StyledGroupButtonCheck } from './Styled'

export interface GroupButtonCheckProps {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  label?: any
  values: string[]
  title?: string
  onClickOption: (el: boolean[]) => void
  defaultValue?: boolean
}

export type ButtonVariant = 'default' | 'primary-red' | 'primary-green' | 'primary-edit' | 'secondary' | 'icon'

export const GroupButtonCheck = (props: GroupButtonCheckProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { type, label, values, title, onClickOption, defaultValue } = props
  const [showOptions, setShowOption] = useState(false)
  const [listChecked, setListChecked] = useState<boolean[]>(
    values.map((_, i) => defaultValue || !!(type === 'radio' && i === 0))
  )

  const changeStatus = (index: number) => {
    if (type === 'checkbox') {
      const newListChecked = [...listChecked]
      newListChecked[index] = !listChecked[index]
      setListChecked(newListChecked)
      onClickOption(newListChecked)
    } else {
      const initListRadio = values.map(_ => false)
      if (!listChecked[index]) {
        initListRadio[index] = true
      }
      setListChecked(initListRadio)
      onClickOption(initListRadio)
    }
  }

  const getIconCheck = (checked: boolean) => {
    if (type === 'checkbox') {
      return (
        <span aria-hidden="true">
          {checked ? <img alt="checked" src={checkBoxChecked} /> : <img alt="not check" src={checkBoxNotCheck} />}
        </span>
      )
    }
    return (
      <span>
        <img alt="not check" src={radioChecked} style={{ opacity: checked ? 1 : 0 }} />
      </span>
    )
  }
  // handle click outside event
  const useComponentVisible = () => {
    const ref = useRef<HTMLDivElement>(null)
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowOption(false)
      }
    }
    useEffect(() => {
      document.addEventListener('click', handleClickOutside, true)
      return () => {
        document.removeEventListener('click', handleClickOutside, true)
      }
    })
    return { ref }
  }

  const { ref } = useComponentVisible()

  return (
    <StyledGroupButtonCheck ref={ref}>
      {/* eslint-disable-next-line react/button-has-type */}
      <span className="ch-label" onClick={() => setShowOption(!showOptions)} aria-hidden="true">
        {label}
      </span>
      {showOptions && (
        <div className="listOption">
          {title}
          {values.map((el, i) => (
            <div style={{ display: 'flex' }} onClick={() => changeStatus(i)} aria-hidden="true">
              {getIconCheck(listChecked[i])}
              <span> {el}</span>
            </div>
          ))}
        </div>
      )}
    </StyledGroupButtonCheck>
  )
}

export default GroupButtonCheck
