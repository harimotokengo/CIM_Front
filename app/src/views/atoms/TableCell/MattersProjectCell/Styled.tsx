/* eslint-disable indent */
import styled from 'styled-components'

export const StyledIcon = styled.div<{ matterGenreId: number }>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 2px;

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

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);

    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    content: ${props => {
      let label = ''
      switch (props.matterGenreId) {
        case 1:
          label = props.theme.matterGenreLabels[1].toString()
          break
        case 2:
          label = props.theme.matterGenreLabels[2].toString()
          break
        case 3:
          label = props.theme.matterGenreLabels[3].toString()
          break
        case 4:
          label = props.theme.matterGenreLabels[4].toString()
          break
        case 5:
          label = props.theme.matterGenreLabels[5].toString()
          break
        case 6:
          label = props.theme.matterGenreLabels[6].toString()
          break
        case 7:
          label = props.theme.matterGenreLabels[7].toString()
          break
        case 8:
          label = props.theme.matterGenreLabels[8].toString()
          break
        case 9:
          label = props.theme.matterGenreLabels[9].toString()
          break
        case 10:
          label = props.theme.matterGenreLabels[10].toString()
          break
        case 11:
          label = props.theme.matterGenreLabels[11].toString()
          break
        default:
          label = props.theme.matterGenreLabels[0].toString()
      }
      return label
    }};
  }
`

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
`

export const StyledName = styled.p`
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: #343a40;
`

export const StyledDateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`

export const StyledDate = styled.p<{ label: string }>`
  font-size: ${props => props.theme.fontSizes.note.fontSize};
  line-height: ${props => props.theme.fontSizes.note.lineHeight};

  color: ${props => props.theme.colors.greys.dark};

  &:before {
    float: left;
    width: 28px;
    height: 18px;
    margin-right: 5px;
    text-align: center;

    background: rgba(191, 201, 210, 0.2);
    border-radius: ${props => props.theme.radii.default};

    content: ${props => `"${props.label}"`};
  }
`
