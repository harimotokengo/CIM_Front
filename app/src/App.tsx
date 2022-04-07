import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./pages/Login'))

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.HOME} element={<Home />} />
      <Route path={routes.HOME} element={<Login />} />
    </Routes>
  </BrowserRouter>
)

export const routes = {
  HOME: '/',
  LOGIN: 'login',
}

export default App
