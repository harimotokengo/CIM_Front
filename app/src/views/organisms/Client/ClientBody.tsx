import { useCallback, useState } from 'react'

import Flex from '../../atoms/Flex'
import Title from '../../atoms/Title'
import LargeButton from '../../molecules/Button/LargeButton'
import CorpForm from './Corp/Profile'
import PersonalForm from './Personal/Profile'

const views = ['個人', '法人', '問い合わせ']

const ClientBody = () => {
  const [view, setView] = useState(0)

  const CurrentView = useCallback(() => {
    switch (view) {
      case 0:
        return <PersonalForm />
      case 1:
        return <CorpForm />
      default:
        // eslint-disable-next-line react/jsx-no-useless-fragment
        return <></>
    }
  }, [view])

  return (
    <Flex container flexDirection="column" mt="20px" mb="20px" gap="20px">
      <Title>クライアント登録</Title>
      <Flex container flexDirection="row" gap="10px">
        {views.map((x, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <LargeButton key={i} variant={view === i ? 'select' : 'secondary'} label={x} onClick={() => setView(i)} />
        ))}
      </Flex>
      <CurrentView />
    </Flex>
  )
}

export default ClientBody
