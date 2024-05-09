import './App.css'
import Header from './Components/Header'
import Articles from './Components/Articles'
import ArticlePage from './Components/ArticlePage'
import { UserContext } from './Contexts/contexts'
import { Route, Routes } from 'react-router-dom'
import ArticleComments from './Components/ArticleComments'
import HomePage from './Components/HomePage'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState("jessjelly")

  return (
    <UserContext.Provider value={{user, setUser}}>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/articles'} element={<Articles />} />
        <Route path={'/articles/:article_id'} element={<ArticlePage />} />
        <Route path={'/articles/:article_id/comments'} element={<ArticleComments />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
