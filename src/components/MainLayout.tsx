import { Outlet } from 'react-router-dom'
import Header from './Header'

interface Props {}

export default function MainLayout({}: Props) {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
