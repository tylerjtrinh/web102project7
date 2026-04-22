import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

const COLORS = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow']

function EditCrewmate() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState('')
  const [color, setColor] = useState('')

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single()

      if (error) console.error(error)
      else {
        setName(data.name)
        setSpeed(data.speed)
        setColor(data.color)
      }
    }

    fetchCrewmate()
  }, [id])

  const handleUpdate = async (e) => {
    e.preventDefault()
    const { error } = await supabase
      .from('crewmates')
      .update({ name, speed: parseFloat(speed), color })
      .eq('id', id)

    if (error) console.error(error)
    else navigate('/gallery')
  }

  const handleDelete = async () => {
    const { error } = await supabase
      .from('crewmates')
      .delete()
      .eq('id', id)

    if (error) console.error(error)
    else navigate('/gallery')
  }

  return (
  <div className="page">
    <div className="create-container">
      <h1>Update Your Crewmate</h1>
      <p>Current Info: Name: {name}, Speed: {speed}, Color: {color}</p>
      
      <form onSubmit={handleUpdate}>
        <div className="form-row">
          <div className="form-box">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-box">
            <label>Speed (mph):</label>
            <input
              type="number"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
          </div>

          <div className="form-box">
            <label>Color:</label>
            <div className="radio-group">
              {COLORS.map((c) => (
                <label key={c}>
                  <input
                    type="radio"
                    name="color"
                    value={c}
                    checked={color === c}
                    onChange={(e) => setColor(e.target.value)}
                  />
                  {c}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button type="submit">Update Crewmate</button>
          <button type="button" onClick={handleDelete}>Delete Crewmate</button>
        </div>
      </form>
    </div>
  </div>
)
}

export default EditCrewmate