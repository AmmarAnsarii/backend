import express from "express"
const app = express()
const port = process.env.port || 3001

app.get('', (req, res)=>{
    res.send("Hello How are you?")
})

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
          "id": 1,
          "title": "Why did the scarecrow win an award?",
          "content": "Because he was outstanding in his field!"
        },
        {
          "id": 2,
          "title": "Why don't scientists trust atoms?",
          "content": "Because they make up everything!"
        },
        {
          "id": 3,
          "title": "How does a penguin build its house?",
          "content": "Igloos it together!"
        },
        {
          "id": 4,
          "title": "What do you call fake spaghetti?",
          "content": "An impasta!"
        },
        {
          "id": 5,
          "title": "Why did the math book look sad?",
          "content": "Because it had too many problems."
        }
      ]
      res.send(jokes)
})  

app.listen(port, ()=>{
    console.log(`The website is hosted at http://localhost:${port}`);
    
})