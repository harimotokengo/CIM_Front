import styled from 'styled-components'

export const StyledHeaderSearchMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 10px 25px;

  border-bottom: 1px solid rgba(191, 201, 210, 0.2);
`

export const StyledHeaderMenuItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3px;
  margin-right: 20px;
  cursor: pointer;
`

export const StyledHeaderSearchBoxWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  /* width: 312px; */
  width: 170px;
  height: 330px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  /* align-items: flex-start;
  justify-content: flex-start; */

  background: #ffffff;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.176);
  border-radius: ${props => props.theme.radii.default};
`

export const StyledHeaderMenuItem = styled.div`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  padding: 0;

  font-size: 14px;
  color: #a4a4a4;
`

export const StyledMatterGenreItem = styled.div<{ matterGenreId: number }>`
  margin-bottom: 18px;
  font-size: 12px;
  position: relative;
  margin-left: 40px;

  &:before {
    display: block;
    position: absolute;
    left: -30px;
    margin: 0 5px;
    padding-top: 10px;
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${props => {
    let color = ''
    switch (props.matterGenreId) {
      case 1:
        color = props.theme.icons.matterGenre.genres[1].bg
        break
      case 2:
        color = props.theme.icons.matterGenre.genres[2].bg
        break
      case 3:
        color = props.theme.icons.matterGenre.genres[3].bg
        break
      case 4:
        color = props.theme.icons.matterGenre.genres[4].bg
        break
      case 5:
        color = props.theme.icons.matterGenre.genres[5].bg
        break
      case 6:
        color = props.theme.icons.matterGenre.genres[6].bg
        break
      case 7:
        color = props.theme.icons.matterGenre.genres[7].bg
        break
      case 8:
        color = props.theme.icons.matterGenre.genres[8].bg
        break
      case 9:
        color = props.theme.icons.matterGenre.genres[9].bg
        break
      case 10:
        color = props.theme.icons.matterGenre.genres[10].bg
        break
      case 11:
        color = props.theme.icons.matterGenre.genres[11].bg
        break
      default:
        color = props.theme.icons.matterGenre.genres[0].bg
    }
    return color
  }};
  }
`
