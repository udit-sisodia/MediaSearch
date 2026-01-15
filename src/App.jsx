import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CollectionPage from './pages/CollectionPage'
import Navbar from './components/Navbar'
import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <div className='bg-gray-950 min-h-screen w-full text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/collections' element={<CollectionPage/>}/>
      </Routes>
       <ToastContainer />
    </div>
  )
}

export default App
