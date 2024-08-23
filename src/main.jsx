import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import GlobalStyle from './GlobalStyle.jsx'
import Home from "./pages/Home"
import Movie from "./pages/Movie/index.jsx"
import Search from './pages/Search'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={ <App/> }>
          <Route path='/' element={<Home />} />
          <Route path='movie/:id' element={<Movie />} />
          <Route path='search' element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
