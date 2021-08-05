const express = require('express')
const router = express.Router()
const KanyeQuotes = require('../models/kanyeq.js')

router.get('/', (req, res) => {
  // KanyeQuotes.find({}, (err, foundAnimals) => {
  //   res.json(foundAnimals)
  // })
  res.send('KanyeQuotes Page')

})

router.delete('/:id', (req, res) => {
  KanyeQuotes.findByIdAndRemove(req.params.id, (err, deletedListing) => {
    res.json(deletedListing)
  })
})

router.post('/', (req, res) => {
  KanyeQuotes.create(req.body, (err, createdListing) => {
    res.json(createdListing)
  })
})

router.put('/:id', (req, res) => {
  KanyeQuotes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedListing) => {
    res.json(updatedListing)
  })
})

module.exports = router
