const express = require('express')
const router = express.Router()
const KanyeQuotes = require('../models/kanyeq.js')

router.get('/', (req, res) => {
  KanyeQuotes.find({}, (err, foundQuote) => {
    res.json(foundQuote)
  })


})

router.delete('/:id', (req, res) => {
  KanyeQuotes.findByIdAndRemove(req.params.id, (err, deletedQuote) => {
    res.json(deletedQuote)
  })
})

router.post('/', (req, res) => {
  KanyeQuotes.create(req.body, (err, ) => {
    res.json(createdQuote)
  })
})

router.put('/:id', (req, res) => {
  KanyeQuotes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedListing) => {
    res.json(updatedQuote)
  })
})

module.exports = router
