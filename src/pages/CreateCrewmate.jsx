import { useState } from 'react'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

const COLORS = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow']

function CreateCrewmate() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState('')
  const [color, setColor] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase
      .from('crewmates')
      .insert([{ name, speed: parseFloat(speed), color }])
    
    if (error) {
      console.error(error)
    } else {
      navigate('/gallery')
    }
  }

  return (
  <div className="page">
    <div className="create-container">
      <h1>Create a New Crewmate</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-box">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter crewmate's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-box">
            <label>Speed (mph):</label>
            <input
              type="number"
              placeholder="Enter speed in mph"
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

        <button type="submit">Create Crewmate</button>
      </form>
    </div>
  </div>
)
}

export default CreateCrewmate