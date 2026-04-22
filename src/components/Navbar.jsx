import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create a Crewmate!</Link>
      <Link to="/gallery">Crewmate Gallery</Link>
    </nav>
  )
}

export default Navbar