import { useEffect, useState } from 'react'
import axios from "axios"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=> setJokes(response.data))
    .catch((error)=>{
      console.log(error);
      
    })
  })

  console.log(jokes);
  
  return (
    <>
    <h1>Hello How are you?</h1>
    <p>JOKES: {jokes.length}</p>

    {jokes.map((joke)=> (
      <div key = {joke.id}>
        <h3>{joke.id} - {joke.title}</h3>
        <p>{joke.content}</p>
      </div>
    ))}
    </>
  )
}

export default App
