import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { Reports } from '../pages/Reports'
import { NavBar } from '../components/NavBar'

export const MyRouter = () => {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/reports' element={<Reports />} />
        </Routes>
    </BrowserRouter>
  )
}
