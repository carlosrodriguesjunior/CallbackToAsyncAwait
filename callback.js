const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.get('/', function (req, res) {
    MongoClient.connect('mongodb://localhost:27017/devXperience', function (err, db) {
        if (err) throw err
        db.collection('alunos').find().toArray(function (err, result) {
            if (err) throw err
            res.send(result)
        })
    })
    
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})