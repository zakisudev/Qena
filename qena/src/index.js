import React from 'react'
import ReactDOM from 'react-dom/client'

function Read() {
  return (
    <div>
      <h1>READ</h1>
      <h2>Read more</h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Read />)
