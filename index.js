const express = require('express')
const app = express()
const PORT = process.env.PORT || 8888

app.get('/', (req, res) => {
  res.send('221 T/D APL. DIST. S3')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
