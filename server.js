const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const galleryController = require('./controllers/animal_shelter.js')
app.use('/shelter', animalShelterController)




app.listen(3000, () => {
  console.log('shelter server on..');
})

mongoose.connect(
  'mongodb://localhost:27017/animal_shelter',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)

mongoose.connection.once('open', () => {
  console.log('connected to mongod');
})
