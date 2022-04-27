import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Clients from './pages/Clients'
import Page404 from './pages/Page404'
import Project from './pages/Project'

const Home = React.lazy(() => import('./pages/Home'))
const AddClient = React.lazy(() => import('./pages/Clients/Profile'))
const EditClient = React.lazy(() => import('./pages/Project/Client'))

const App: React.FC = () => (
  <Suspense fallback={<div>Loading... </div>}>
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="clients" element={<Clients />}>
          <Route path="new" element={<AddClient />} />
        </Route>
        <Route path="project" element={<Project />}>
          <Route path="home" element={<Home />} />
          <Route path="client" element={<EditClient />} />
        </Route>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<Navigate to="/clients/new" />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
)

export default App
