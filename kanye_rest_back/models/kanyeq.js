const mongoose = require('mongoose')

const kanyeSchema = new mongoose.Schema({
  quote: String

})

const KanyeQuotes = mongoose.model('Quote', kanyeSchema)

module.exports = KanyeQuotes
