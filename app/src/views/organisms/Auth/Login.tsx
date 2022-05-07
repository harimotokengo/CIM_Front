/* eslint-disable react/button-has-type */
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { loginRequest } from "../../../store/actions/sessionAction"
import { LoginPayload } from "../../../store/models/sessionModel"
import { getErrorSelector, getPendingSelector } from "../../../store/selectors/sessionSelector"

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const pending = useSelector(getPendingSelector)
  const loginError = useSelector(getErrorSelector)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [progressLogin, setProgressLogin] = useState(false)

  useEffect(() => {
    if (pending) setProgressLogin(true)
    if (progressLogin && !pending) {
      setProgressLogin(false)
      alert(loginError ? 'ログインエラー' : 'ログイン成功')
      if (!loginError) {
        navigate('/clients')
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pending])

  const handleClick = () => {
    dispatch(loginRequest({ user: { email, password }} as LoginPayload))
  }

  return (
    <>
      <div>
        <p>メールアドレス</p>
        <input type='email' onChange={(e) => setEmail(e.currentTarget.value)} />
      </div>
      <div>
        <p>パスワード</p>
        <input type='password' onChange={(e) => setPassword(e.currentTarget.value)} />
      </div>
      <div>
        <button aria-label="ログイン" onClick={handleClick} >ログイン</button>
      </div>
    </>
  )
}

export default Login
