const express = require('express')
const router = express.Router()
const fs = require('fs')
const dataStorage = require('../data-storage')

router.get('/', function (req, res) {
  dataStorage.getMoviesAndCategories(function (movies, categories) {
    // res.send('the movies' + JSON.stringify(movies))\
    //categories = ["Sci-fi", "Action"]
    console.log("categories = " + JSON.stringify(categories))
    res.render('index', { movies: movies, categories: categories })
  })
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
router.get('/movies/category/:category', function (req, res) {
  dataStorage.getMovies(function (movies) {
    let categoryMovies = movies.filter((x) => { return x.categories.includes(req.params.category) })
    res.send(JSON.stringify(categoryMovies))
  })
})

router.post('/movies/edit', function (req, res) {

  let newMovie = {
    id: 0,
    title: "",
    description: "",
    categories: [],
    "like-total": 0,
    "people-likes": []
  }

  newMovie.title = req.body.title
  newMovie.categories.push(req.body.category)
  newMovie.description = req.body.description

  dataStorage.addMovie(newMovie)
  console.log('the data is:', req.body)
  res.redirect('/movies')
})


module.exports = {
  router: router
}