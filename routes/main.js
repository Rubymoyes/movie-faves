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
    res.send('the movies' + JSON.stringify(movies))
  })
})

module.exports = {
  router: router
}