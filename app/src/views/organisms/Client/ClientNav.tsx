import pencilSquare from '../../../assets/images/pencil_square.svg'
import Navbar from '../../atoms/Navbar'
import NavbarItem from '../../atoms/Navbar/NavbarItem'
import NavbarLabel from '../../atoms/Navbar/NavbarLabel'

const pencilIcon = <img alt="pencilSquare" src={pencilSquare} style={{ width: '21px', height: '21px' }} />

const ClientNav = () => {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <Navbar>
      <NavbarLabel label="追加情報" />
      <NavbarItem label="プロフィール" icon={pencilIcon} onClick={handleClick} />
      <NavbarItem label="案件" icon={pencilIcon} onClick={handleClick} />
      <NavbarItem label="関係者" icon={pencilIcon} onClick={handleClick} />
      <NavbarItem label="報酬等" icon={pencilIcon} onClick={handleClick} />
    </Navbar>
  )
}

export default ClientNav
