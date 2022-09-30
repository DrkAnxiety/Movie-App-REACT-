import styles from './App.module.css'
import { HomePage } from './pages/HomePage'
import { MovieDetailsPage } from './pages/MovieDetailsPage'
import { Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header'

function App() {
  const handleOnChange = () => {
    console.log('Typing');
  }

  return (
    <div className={styles.app}>
      <Header handleOnChange={handleOnChange}/>
{/*       
      <header>
        <Link to='/'>Home LOGO</Link>
      </header> */}
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
