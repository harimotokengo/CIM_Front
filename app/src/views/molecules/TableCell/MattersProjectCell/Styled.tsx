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
        color = '#FF7070' // 離
        break
      case 2:
        color = '#FC693B' // 労
        break
      case 3:
        color = '#2070B9' // 刑
        break
      case 4:
        color = '#FFC93D' // 債
        break
      case 5:
        color = '#55C6BF' // 交
        break
      case 6:
        color = '#3ABD96' // 相
        break
      case 7:
        color = '#21928E' // 民
        break
      case 8:
        color = '#026088' // 顧
        break
      case 9:
        color = '#026088' // 法
        break
      case 10:
        color = '#FFC93D' // 知
        break
      case 11:
        color = '#026088' // 個
        break
      default:
        color = '#C2CFE0' // 分
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
          label = '"離"'
          break
        case 2:
          label = '"労"'
          break
        case 3:
          label = '"刑"'
          break
        case 4:
          label = '"債"'
          break
        case 5:
          label = '"交"'
          break
        case 6:
          label = '"相"'
          break
        case 7:
          label = '"民"'
          break
        case 8:
          label = '"顧"'
          break
        case 9:
          label = '"法"'
          break
        case 10:
          label = '"知"'
          break
        case 11:
          label = '"個"'
          break
        default:
          label = '"分"'
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
  font-family: 'Noto Sans JP';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;

  color: #a4a4a4;

  &:before {
    float: left;
    width: 28px;
    height: 18px;
    margin-right: 5px;
    text-align: center;

    background: rgba(191, 201, 210, 0.2);
    border-radius: 4px;

    content: ${props => `"${props.label}"`};
  }
`
