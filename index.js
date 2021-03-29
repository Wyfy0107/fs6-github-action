const app = require('express')()

app.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

app.get('/test', (req, res) => {
  res.send('this is new')
})

module.exports = app
