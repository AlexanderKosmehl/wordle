import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/UI/MainLayout'
import Home from './components/Pages/Home'
import InfinityContainer from './components/Pages/InfinityContainer'

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
