import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Main from './pages/Main';


const App = () => {
  return (
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/:id' element={<Main/>} />
    </Routes>
  )
}

export default App