import { Navigate } from 'react-router-dom';

interface Props {}
export default function Home({}: Props) {
  return <Navigate to="/infinity" />
}
