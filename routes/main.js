const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', function(req, res){
  let viewData = {names: [
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



module.exports = {
    router: router
}