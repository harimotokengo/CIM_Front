import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

import { fetchMe } from '../store/actions/sessionAction'
import { getErrorSelector } from '../store/selectors/sessionSelector'
import Flex from '../views/atoms/Flex'
import ProjectHeader from '../views/organisms/DefaultLayout/Header'
import ProjectSidebar from '../views/organisms/DefaultLayout/Sidebar'

const DefaultLayout = () => {
  const navigate = useNavigate()
  const [isFetching, setIsFetching] = useState(false)
  const fetchUserError = useSelector(getErrorSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    setIsFetching(true)
    dispatch(fetchMe())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isFetching) return
    if (fetchUserError !== '') {
      navigate('/login', { replace: true })
    }
    setIsFetching(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchUserError])

  return (
    <Flex layout="fill-space" style={{ height: '100vh' }}>
      <ProjectSidebar />
      <Flex layout="stack" flex={1}>
        <ProjectHeader />
        <Outlet />
      </Flex>
    </Flex>
  )
}

export default DefaultLayout
