

const express = require('express')
const app = express()
const port = 3000

const users = [
  { id: 1, name: 'Alice', age: 23 },
  { id: 2, name: 'Bob', age: 41 },
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})