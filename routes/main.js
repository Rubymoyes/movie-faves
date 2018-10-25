const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/', function(req, res){
  res.send('Kia ora')

})

module.exports = {
    router: router
}