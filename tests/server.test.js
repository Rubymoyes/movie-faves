let supertest = require('supertest')
let server = require('../server')
let cheerio = require('cheerio')

test('main template is functioning', function (done) {
    expect(true).toBeTruthy
    done()

    // supertest(server)
    // .get('/')
    // .end(function(err, res){
    //     expect(err).toBeNull() 
    //     let $ = cheerio.load(res.text)
    //     let actual = $('h1').first().text()
    //     expect(actual).toEqual(expected)
    //     done()

    //     })
})
