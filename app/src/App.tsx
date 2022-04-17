import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Clients from './pages/Clients'
import Page404 from './pages/Page404'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Client = React.lazy(() => import('./pages/Clients/Client'))

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="clients" element={<Clients />}>
        <Route path="new" element={<Client />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>
)

export default App
