var express = require ('express')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/tunr')

var Artist = require('./models/artists')
var Song = require('./models/songs')

// Create the Express app() and setup
var app = express()
app.use( express.static('public') )
app.use( bodyParser.urlencoded({ extended: true }) )

app.engine( 'handlebars', hbs({ defaultLayout: 'default' }) )
app.set( 'view engine', 'handlebars' )


/*

  Routes

*/
app.get('/', function( req, res ) {

  Artist.find({}, function( err, artists ) {

    res.render('index', { artists: artists })

  })

})

// Artist Routes
app.get('/artists', function( req, res ) {

  console.log('here')

  res.redirect('/')

})

app.post('/artists', function( req, res ) {

  var data = JSON.parse( req.body.data );

  var newArtist = new Artist({
    name: data.name,
    image: data.images,
    spotifyId: data.id,
    genres: data.genres,	
  })

  newArtist.save()

  res.status(200).send('success')

})

app.get('/artists/new', function( req, res ) {

  res.render('artists/new')

})

// app.get('/artists/:id', function( req, res ){

//   Artist.findById(req.params.id, function( err, artist ) {

//     res.render('artists/artist',  artist)

//   })

// })

app.listen( 9000, function() { console.log( 'it works ' ) } )

