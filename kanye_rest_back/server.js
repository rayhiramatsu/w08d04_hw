const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const kanyeController = require('./controllers/kanyeq.js')
app.use('/yequotes', kanyeController)




app.listen(3000, () => {
  console.log('kanyeQuotes server on..');
})

mongoose.connect(
  'mongodb://localhost:27017/kanyeQuotes',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)

mongoose.connection.once('open', () => {
  console.log('connected to mongod');
})
