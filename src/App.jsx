import './App.css'
import Header from './Components/Header'
import Articles from './Components/Articles'
import ArticlePage from './Components/ArticlePage'
import { UserContext } from './Contexts/contexts'
import { Route, Routes } from 'react-router-dom'
import ArticleComments from './Components/ArticleComments'
import HomePage from './Components/HomePage'
import { useState } from 'react'
import ErrorPage from './Components/ErrorPage'

function App() {
  const [user, setUser] = useState("jessjelly")
  

  

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Header />
      <Routes>
        <Route path={''} element={<HomePage />} />
        <Route path={'/articles'} element={<Articles />} />
        <Route path={'/articles/:slug'} element={<Articles />} />
        <Route path={'/article/:article_id'} element={<ArticlePage />} />
        <Route path={'/article/:article_id/comments'} element={<ArticleComments />} />
        <Route path={'*'} element={<ErrorPage />} /> 
      </Routes>
    </UserContext.Provider>
  )
}

export default App
