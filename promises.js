const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.get('/', function (req, res) {

    connectMongoDB().then(function(db){
        return getCollectionList(db)
    })
    .then(function(result){
        res.send(result)
    })
    .catch(function(err){
        res.status(500).send(err)
    });

})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

function connectMongoDB() {
    return new Promise(function (resolve, reject) {
        MongoClient.connect('mongodb://localhost:27017/netcoders', function (err, db) {
            if (err) reject(err)
            resolve(db)

        })
    })
}

function getCollectionList(db) {
    return new Promise(function (resolve, reject) {
        db.collection('alunos').find().toArray(function (err, result) {
            if (err) reject(err)
            resolve(result)
        })
    })
}