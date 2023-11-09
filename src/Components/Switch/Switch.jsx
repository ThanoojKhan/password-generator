import React from 'react'
import './switch.css'
function Switch({setFn}) {
  return (
    <div>
      <>
        <label className="switch">
          <input className="toggle"  type="checkbox" onChange={(e)=>setFn(e.target.checked)}/>
          <span className="slider"></span>
          <span className="card-side"></span>
        </label>
      </>
    </div>
  )
}

export default Switch
