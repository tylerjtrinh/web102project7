import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { Link } from 'react-router-dom'

function Gallery() {
  const [crewmates, setCrewmates] = useState([])

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) console.error(error)
      else setCrewmates(data)
    }

    fetchCrewmates()
  }, [])

  if (crewmates.length === 0) {
    return (
      <div className="page">
        <div className="gallery-container">
          <h1>Your Crewmate Gallery!</h1>
          <p>You haven't made a crewmate yet!</p>
          <Link to="/create">Create one here!</Link>
        </div>
      </div>
    )
  }

  return (
  <div className="page">
    <div className="gallery-container">
      <h1>Your Crewmate Gallery!</h1>
      <div className="gallery-grid">
        {crewmates.map((crewmate) => (
        <div key={crewmate.id} className="crewmate-card">
          <img src="/crewmate.png" alt="crewmate" className="crewmate-img" />
          <div className="crewmate-info">
            <Link to={`/crewmate/${crewmate.id}`}>
              <p>Name: {crewmate.name}</p>
              <p>Speed: {crewmate.speed} mph</p>
              <p>Color: {crewmate.color}</p>
            </Link>
            <Link to={`/edit/${crewmate.id}`}>
              <button>Edit Crewmate</button>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
)
}

export default Gallery