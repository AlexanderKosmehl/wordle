import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './components/pages/Home'
import InfinityContainer from './components/pages/InfinityContainer'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/infinity" element={<InfinityContainer />} />
        </Route>
      </Routes>
    </>
  )
}
