import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function CrewmateDetail() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single()

      if (error) console.error(error)
      else setCrewmate(data)
    }

    fetchCrewmate()
  }, [id])

  if (!crewmate) return <div>Loading...</div>

  return (
    <div className='page'>
      <h1>Crewmate: {crewmate.name}</h1>
      <h2>Stats:</h2>
      <p>Color: {crewmate.color}</p>
      <p>Speed: {crewmate.speed} mph</p>
      <Link to={`/edit/${crewmate.id}`}>
        <button>Wanna edit this Crewmate?</button>
      </Link>
    </div>
  )
}

export default CrewmateDetail