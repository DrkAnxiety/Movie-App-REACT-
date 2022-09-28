import styles from './App.module.css'
import { HomePage } from './pages/HomePage'
import { MovieDetailsPage } from './pages/MovieDetailsPage'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className={styles.app}>
      <header>
        <Link to='/'>Home LOGO</Link>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  )
}

export default App
