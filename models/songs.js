var mongoose = require('mongoose')
var Schema = mongoose.Schema

var songsSchema = new Schema({
  name: String,
  popularity: String,
  artist: String,
  album: String,
})

var Songs = mongoose.model( 'Songs', songsSchema )

module.exports = Songs