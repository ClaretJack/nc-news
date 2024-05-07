import './App.css'
import Header from './Components/Header'
import Articles from './Components/Articles'

import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path={'/articles'} element={<Articles />} />
      </Routes>
     
     
    </>
  )
}

export default App
