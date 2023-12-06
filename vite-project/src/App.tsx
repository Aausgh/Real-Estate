import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/users/Home'
import PageNotFound from './pages/error/PageNotFound'
import Apartments from './pages/users/Apartments'
import ApartmentDetails from './components/ApartmentDetails'
import Navmenu from './components/Navmenu'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navmenu />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/apartments/:id" element={<ApartmentDetails />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
