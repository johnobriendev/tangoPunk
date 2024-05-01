import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='relative flex flex-col w-full h-screen'>
      <Navbar />
      <Outlet className="flex-1"/>
      <Footer/>
    </div>
  )
}

export default App
