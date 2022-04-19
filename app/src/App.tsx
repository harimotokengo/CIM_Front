import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Clients from './pages/Clients'
import Page404 from './pages/Page404'

// const Home = React.lazy(() => import('./pages/Home'))
const AddClient = React.lazy(() => import('./pages/Clients/Profile'))

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route path="clients" element={<Clients />}>
        <Route path="profile" element={<AddClient />} />
      </Route>
      <Route path="*" element={<Page404 />} />
      <Route path="/" element={<Navigate to="/clients/profile" />} />
    </Routes>
  </BrowserRouter>
)

export default App
