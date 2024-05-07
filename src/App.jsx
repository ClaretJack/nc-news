import './App.css'
import Header from './Components/Header'
import Articles from './Components/Articles'
import ArticlePage from './Components/ArticlePage'

import { Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path={'/articles'} element={<Articles />} />
        <Route path={'/articles/:article_id'} element={<ArticlePage />} />
      </Routes>
     
     
    </>
  )
}

export default App
