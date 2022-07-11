import { scroller } from 'react-scroll'

import pencilSquare from '../../../../assets/images/pencil_square.svg'
import Navbar2 from '../../../atoms/Navbar/index2'
import NavbarItem from '../../../atoms/Navbar/NavbarItem'
import NavbarLabel from '../../../atoms/Navbar/NavbarLabel'

const pencilIcon = <img alt="pencilSquare" src={pencilSquare} style={{ width: '21px', height: '21px' }} />

const NavOffice = () => {

  const handleClick = (to: string) => {
    scroller.scrollTo(to, {
      duration: 1000,
      delay: 50,
      smooth: true,
      containerId: 'client-form-main',
      offset: 0,
    })
  }

  // assets/images/からアイコンを持ってくる
  return (
    <Navbar2>
      <NavbarLabel label="事務所情報" />
      <NavbarItem label="プロフィール" icon={pencilIcon} onClick={() => handleClick('profile')} />
      <NavbarItem label="プラン" icon={pencilIcon} onClick={() => handleClick('plan')} />
      <NavbarItem label="支払い情報" icon={pencilIcon} onClick={() => handleClick('payment')} />
      <NavbarItem label="メンバー" icon={pencilIcon} onClick={() => handleClick('member')} />
      <NavbarItem label="売上管理" icon={pencilIcon} onClick={() => handleClick('sales')} />
    </Navbar2>
  )
}

export default NavOffice
