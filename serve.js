const express = require('express')
const path = require('path')
const port = 3000

const app = express()

// serve static js file from dist dir
app.use(express.static('dist'))

// if not a static file from dist, serve default index.html file for any request
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'), err => {
    if (err) {
      console.log(err)
    }
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
