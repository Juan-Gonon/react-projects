import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { Reports, Reports1, Reports2 } from '../pages/Reports'
import { NavBar } from '../components/NavBar'

export const MyRouter = () => {
  return (
    <BrowserRouter>
    <NavBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/reports/reports1' element={<Reports1 />} />
            <Route path='/reports/reports2' element={<Reports2 />} />
        </Routes>
    </BrowserRouter>
  )
}
