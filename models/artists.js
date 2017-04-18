var mongoose = require('mongoose')
var Schema = mongoose.Schema

var artistSchema = new Schema({
  name: String,
  image: Array,
  spotifyId: String,
  genres: Array,
  type: String,
  popularity :String,
  followers:String
})

var Artist = mongoose.model( 'Artist', artistSchema )

module.exports = Artist