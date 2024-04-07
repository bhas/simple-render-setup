import express from 'express'; 

export const app = express();

const users = [
  { id: 1, name: 'Alice', age: 23 },
  { id: 2, name: 'Bob', age: 41 },
]

app.get('/api/test', (_, res) => 
    res.json({ greeting: "Hello" }
))

app.get('/api/users', (req, res) => {
  res.json(users)
})

if (!process.env['VITE']) {
  const frontendFiles = process.cwd() + '/dist'
  app.use(express.static(frontendFiles))
  app.get('/*', (_, res) => {
    res.send(frontendFiles + '/index.html')
  })
  app.listen(process.env['PORT'])
}