import { Routes, Route } from 'react-router-dom'
import { Blog } from '../pages/Blog'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
    </Routes>
  )
}
