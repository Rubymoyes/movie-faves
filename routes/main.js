const express = require('express')
const router = express.Router()
const fs = require('fs')
const dataStorage = require('../data-storage')

router.get('/', function (req, res) {
  dataStorage.getMovies(function (movies) {

    let categories = [{
        name: 'Documentary / Bio-pic',
        description: 'seriously interesting - for the open learning mindest only!'
      },
      {
        name: 'Sci-fi / Fantasy',
        description: 'Out of this world!'
      },
      {
        name: 'Animation',
        description: 'Cute and cuddly - with a moral for the kids!'
      }
    ]
    let viewData = {}
    viewData.movies = movies
    viewData.categories = categories
    res.render('index', viewData)
  })
})

router.get('/movies', function (req, res) {
  dataStorage.getMovies(function (movies) {
    // res.send('the movies' + JSON.stringify(movies))\
    res.render('movies/index', {
      movies: movies
    })
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

router.post('/movies/edit', function (req, res) {

  let newMovie = {
    id: 0,
    title: "",
    categories: [],
    "people-likes": []
  }

  newMovie.title = req.body.title
  newMovie.categories.push(req.body.category)

  dataStorage.addMovie(newMovie)
  console.log('the data is:', req.body)
  res.redirect('/movies')
})


module.exports = {
  router: router
}