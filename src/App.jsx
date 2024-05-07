import './App.css'
import Header from './Components/Header'
import Articles from './Components/Articles'
import ArticlePage from './Components/ArticlePage'

import { Route, Routes } from 'react-router-dom'
import ArticleComments from './Components/ArticleComments'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path={'/articles'} element={<Articles />} />
        <Route path={'/articles/:article_id'} element={<ArticlePage />} />
        <Route path={'/articles/:article_id/comments'} element={<ArticleComments />} />
      </Routes>
     
     
    </>
  )
}

export default App
