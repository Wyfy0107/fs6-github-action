const app = require('express')()

app.get('/', (req, res) => {
  res.json({ message: 'hello world' })
})

app.listen(process.env.PORT || 3000)
