const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Show = new Schema(
  {
    title: { type: String, required: true },
    duration: { type: String, required: true },
    plot: { type: String, required: true },
    imgURL: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('shows', Show)