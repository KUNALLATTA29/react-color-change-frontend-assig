import { useState } from 'react'
import '../src/App.css'


function App() {
  const [col, setCol] = useState('')

  return (
      <div className='container' style={{backgroundColor:`${col}`}}>
        <input
          type='color'
          onChange={(val) => {setCol(val.target.value)}}
        />
      </div>
  )
}

export default App
