const express = require('express')
const router = express.Router()
const fs = require('fs')
const dataStorage = require('../data-storage')

router.get('/', function (req, res) {
  let viewData = {
    names: [
      {
        name: 'Ruby'
      },
      {
        name: 'Joan'
      },
      {
        name: 'James'
      },
      {
        name: 'Peter'
      }
    ]
  }
  res.render('index', viewData)
})

router.get('/movies', function (req, res) {
  dataStorage.getMovies(function (movies) {
    // res.send('the movies' + JSON.stringify(movies))\
    res.render('movies/index', { movies: movies })
  })
})


router.get('/movies/edit', function (req, res) {
  res.render('movies/edit')
})

router.get('/movies/:id', function (req, res) {
  dataStorage.getSingleMovie(req.params.id, function (movie) {
    res.render('movies/view', movie)
  })
})




module.exports = {
  router: router
}