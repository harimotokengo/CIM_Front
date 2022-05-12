import { useSelector } from 'react-redux'
import { scroller } from 'react-scroll'

import pencilSquare from '../../../../assets/images/pencil_square.svg'
import { getScrollPositionSelector } from '../../../../store/selectors/scrollSelector'
import Navbar from '../../../atoms/Navbar'
import NavbarItem from '../../../atoms/Navbar/NavbarItem'
import NavbarLabel from '../../../atoms/Navbar/NavbarLabel'

const pencilIcon = <img alt="pencilSquare" src={pencilSquare} style={{ width: '21px', height: '21px' }} />

const NavClient = () => {
  const scrollPosition = useSelector(getScrollPositionSelector)

  const handleClick = (to: string) => {
    scroller.scrollTo(to, {
      duration: 1000,
      delay: 50,
      smooth: true,
      containerId: 'client-form-main',
      offset: 0,
    })
  }

  return (
    <Navbar>
      <NavbarLabel label="追加情報" />
      <NavbarItem
        label="プロフィール"
        icon={pencilIcon}
        onClick={() => handleClick('profile')}
        selected={scrollPosition >= 0 && scrollPosition < 80}
      />
      <NavbarItem
        label="案件"
        icon={pencilIcon}
        onClick={() => handleClick('matter')}
        selected={scrollPosition >= 80}
      />
      <NavbarItem label="関係者" icon={pencilIcon} onClick={() => handleClick('')} />
      <NavbarItem label="報酬等" icon={pencilIcon} onClick={() => handleClick('')} />
    </Navbar>
  )
}

export default NavClient
