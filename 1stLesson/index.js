require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

const apiData = {
    "quotes": [
      {
        "id": 1,
        "quote": "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
        "author": "Rumi"
      },
      {
        "id": 2,
        "quote": "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
        "author": "Abdul Kalam"
      },
      {
        "id": 3,
        "quote": "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
        "author": "Abdul Kalam"
      }
    ],
    "total": 1454,
    "skip": 0,
    "limit": 3
  }
   

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/dummyjson', (req, res) =>{
    res.json(apiData)
})

app.get('/twitter', (req,res)=>{
    res.send('ammardotcom')
} )

app.get('/helpme', (req, res) => {
    res.send("<h1>This is an SOS</h1>")
})

app.get('/youtube', (req, res)=>{
    res.send('<h2>Youtube</h2>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example App listening on ${port}`);
    
})