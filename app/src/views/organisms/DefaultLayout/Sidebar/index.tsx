/* eslint-disable max-len */
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import bell from '../../../../assets/images/bell.svg'
import check from '../../../../assets/images/check.svg'
import clock from '../../../../assets/images/clock.svg'
import gear from '../../../../assets/images/gear.svg'
import graphUp from '../../../../assets/images/graph_up.svg'
import hands from '../../../../assets/images/hands.svg'
import house from '../../../../assets/images/house.svg'
import info from '../../../../assets/images/info_circle.svg'
import personPlus from '../../../../assets/images/person_plus.svg'
import personSquare from '../../../../assets/images/person_square.svg'
import plusCircle from '../../../../assets/images/plus_circle.svg'
import substract from '../../../../assets/images/substract.svg'
import Modal, { ModalHandles } from '../../../atoms/Modal'
import NewClient from '../../Clients/NewClient'
import SidebarBottom from './SidebarBottom'
import SidebarContainer from './SidebarContainer'
import SidebarHeader from './SidebarHeader'
import SidebarItem, { SidebarItemProps } from './SidebarItem'

const houseIcon = <img alt="house" src={house} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const taskIcon = <img alt="task" src={check} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const clockIcon = <img alt="clock" src={clock} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const bellIcon = <img alt="bell" src={bell} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const substractIcon = <img alt="substract" src={substract} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const clientIcon = (
  <img alt="person_square" src={personSquare} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
)
const customersIcon = <img alt="hands" src={hands} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const statisticsIcon = <img alt="graph_up" src={graphUp} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const addClientIcon = <img alt="plus_circle" src={plusCircle} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const addMemberIcon = <img alt="person_plus" src={personPlus} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const settingIcon = <img alt="gear" src={gear} style={{ width: '21px', height: '21px', opacity: 0.5 }} />
const infoIcon = <img alt="info" src={info} style={{ width: '21px', height: '21px', opacity: 0.5 }} />

interface SidebarProps extends Partial<Omit<SidebarItemProps, 'sub' | 'children' | 'onClick'>> {
  isBottom?: boolean
  children?: SidebarProps[]
}

const defaultSidebarItems: SidebarProps[] = [
  { icon: houseIcon, label: 'ホーム', path: 'home', isCurrent: true },
  {
    icon: taskIcon,
    label: 'マイタスク',
    path: 'task',
    isCurrent: false,
    children: [
      { icon: clockIcon, label: '作業記録', path: 'history', isCurrent: false },
      { icon: bellIcon, label: '受信ボックス', path: 'mailbox', isCurrent: false },
    ],
  },
  { icon: substractIcon, label: '案件', path: 'matters', isCurrent: false },
  { icon: clientIcon, label: 'クライアント', path: 'clients', isCurrent: false },
  { icon: customersIcon, label: '集客', path: 'customers', isCurrent: false },
  { icon: statisticsIcon, label: '統計データ', path: 'statistics', isCurrent: false },
  { icon: addClientIcon, label: 'クライアント登録', path: 'clients/new', isCurrent: false },
  { icon: addMemberIcon, label: 'メンバー追加', path: 'members/new', isCurrent: false },
  {
    isBottom: true,
    children: [
      { icon: settingIcon, label: '設定', path: 'settings', isCurrent: false },
      { icon: infoIcon, label: 'ヘルプ・問い合わせ', path: 'help', isCurrent: false },
    ],
  },
]

const Sidebar = () => {
  const location = useLocation()
  const newClientRef = useRef<ModalHandles>(null)
  const navigate = useNavigate()
  const [isNarrow, setIsNarrow] = useState(false)
  const [sidebarItems, setSidebarItems] = useState(defaultSidebarItems)

  useEffect(() => {
    const splitPaths = location.pathname.split('/')
    const newItems: typeof sidebarItems = sidebarItems.map(item => {
      if (item.children) {
        const newChildren = item.children.map(childNode => ({
          ...childNode,
          isCurrent: childNode.path === splitPaths[1],
        }))
        return {
          ...item,
          isCurrent: item.path === splitPaths[1],
          children: newChildren,
        }
      }
      return {
        ...item,
        isCurrent: item.path === splitPaths[1],
      }
    })
    setSidebarItems(newItems)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const handleItemClick = (path: string) => {
    if (path === 'clients/new') {
      newClientRef.current?.toggleModal()
      return
    }
    navigate(path)
  }

  return (
    <>
      <SidebarContainer isNarrow={isNarrow} headerComponent={<SidebarHeader onClick={() => setIsNarrow(!isNarrow)} />}>
        {sidebarItems.map(item => {
          if (!item.children) {
            return (
              <SidebarItem
                key={item.path}
                icon={item.icon}
                label={item.label!}
                path={item.path!}
                isCurrent={item.isCurrent!}
                onClick={handleItemClick}
              />
            )
          }
          if (item.isBottom) {
            return (
              <SidebarBottom>
                {item.children.map(childNode => (
                  <SidebarItem
                    key={childNode.path}
                    icon={childNode.icon}
                    label={childNode.label!}
                    path={childNode.path!}
                    isCurrent={childNode.isCurrent!}
                    onClick={handleItemClick}
                  />
                ))}
              </SidebarBottom>
            )
          }
          return (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label!}
              path={item.path!}
              isCurrent={item.isCurrent!}
              onClick={handleItemClick}
            >
              {item.children.map(childNode => (
                <SidebarItem
                  sub
                  key={childNode.path}
                  icon={childNode.icon}
                  label={childNode.label!}
                  path={childNode.path!}
                  isCurrent={childNode.isCurrent!}
                  onClick={handleItemClick}
                />
              ))}
            </SidebarItem>
          )
        })}
      </SidebarContainer>
      <Modal ref={newClientRef}>
        <NewClient onCancel={() => newClientRef.current?.toggleModal()} />
      </Modal>
    </>
  )
}

export default Sidebar
