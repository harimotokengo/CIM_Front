import { useSelector } from 'react-redux'

import checkImg from '../../../../assets/images/check.svg'
import filterImg from '../../../../assets/images/filter.svg'
import sortImg from '../../../../assets/images/sort.svg'
import { MATTER_GENRE } from '../../../../constants/matters'
import { getFilterSelector } from '../../../../store/selectors/filterSelector'
import HeaderMenuItem from './HeaderMenuItem'
import { StyledHeaderSearchMenuContainer } from './Styled'

const checkIcon = <img alt="check" src={checkImg} style={{ width: '18px', height: '18px', opacity: 0.5 }} />
const filterIcon = <img alt="filter" src={filterImg} style={{ width: '18px', height: '18px', opacity: 0.5 }} />
const sortIcon = <img alt="sort" src={sortImg} style={{ width: '18px', height: '18px', opacity: 0.5 }} />

const HeaderSearchMenu = () => {
  const filter = useSelector(getFilterSelector)

  return (
    <StyledHeaderSearchMenuContainer>
      <HeaderMenuItem
        id={1}
        icon={checkIcon}
        label={
          filter.is_filter && filter.filter_key === 'matter_genre'
            ? MATTER_GENRE.find(x => x.id === filter.filter_value!)?.name || 'エラー'
            : 'すべての案件'
        }
      />
      <HeaderMenuItem id={2} icon={filterIcon} label="絞り込み" />
      <HeaderMenuItem id={3} icon={sortIcon} label="ソート" />
    </StyledHeaderSearchMenuContainer>
  )
}

export default HeaderSearchMenu
