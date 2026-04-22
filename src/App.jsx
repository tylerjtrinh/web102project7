import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CreateCrewmate from './pages/CreateCrewmate'
import Gallery from './pages/Gallery'
import CrewmateDetail from './pages/CrewmateDetail'
import EditCrewmate from './pages/EditCrewmate'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCrewmate />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
      </Routes>
    </>
  )
}

export default App