import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { cognitoConfig } from '../cognito/config'
import { fetchMe } from '../store/actions/sessionAction'
import { getErrorSelector } from '../store/selectors/sessionSelector'
import Flex from '../views/atoms/Flex'
import ProjectHeader from '../views/organisms/DefaultLayout/Header'
import ProjectSidebar from '../views/organisms/DefaultLayout/Sidebar'

const DefaultLayout = () => {
  // const navigate = useNavigate()
  const [isFetching, setIsFetching] = useState(false)
  const fetchUserError = useSelector(getErrorSelector)
  const dispatch = useDispatch()

  const loginClick = () => {
    window.location.href = `${cognitoConfig.demoUrl}?client_id=${cognitoConfig.clientId}
      &response_type=token&scope=email+openid&redirect_uri=${cognitoConfig.localHost}`;
  }

  useEffect(() => {
    setIsFetching(true)
    dispatch(fetchMe())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isFetching) return
    if (fetchUserError !== '') {
      // navigate('/login', { replace: true })
    }
    setIsFetching(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchUserError])

  return (
    <Flex layout="fill" style={{ height: '100vh' }}>
      <ProjectSidebar />
      <Flex layout="stack" flex={1}>
        <ProjectHeader loginClick={loginClick} />
        <Outlet />
      </Flex>
    </Flex>
  )
}

export default DefaultLayout
