// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = useRef(null)

  const [username, setUsername] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const username = usernameRef.current.value
    onSubmitUsername(username)
  }

  const handleChange = event => {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          ref={usernameRef}
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
