import './styles/App.css'
import Nav from './components/Nav'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
// import GameDetails from './pages/GameDetails'
// import ViewGames from './pages/ViewGames'
// Your imports here

const App = () => {

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/games/details/:gameId"  />
          <Route path="/view/games/:genreId"  />
        </Routes>
      </main>

    </div>
  )
}

export default App