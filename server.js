const express = require('express')
const path = require('path')
const app = express()
const logger = require('morgan')


app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'build')))


app.get('/data', (req,res) => {
    res.status(200).json({data: "this is data"})
})

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(5000, () => {
    console.log(`Server is Listening on 5000`)
})