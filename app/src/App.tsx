import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout'
// import ClientPage from './pages/Clients'
import Login from './pages/Login'
import Page404 from './pages/Page404'

const Home = React.lazy(() => import('./pages/Home'))
const Clients = React.lazy(() => import('./pages/Clients/Clients'))
const Client = React.lazy(() => import('./pages/Clients/Client'))
const Matters = React.lazy(() => import('./pages/Matters/Matters'))

const App: React.FC = () => (
  <Suspense fallback={<div>Loading... </div>}>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/:id" element={<Client />} />
          <Route path="matters" element={<Matters />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
)

export default App
