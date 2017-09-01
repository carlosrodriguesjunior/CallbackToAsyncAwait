const express = require('express');
const app = express();
const MongoClient = require('mongodb');
const co = require('co');

app.get('/', (req, res) => {
    co(function* () {
        try {

            let db = yield connectMongoDB();
            let result = yield getCollectionList(db);
            res.send(result)

        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
    })


})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})


let connectMongoDB = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect('mongodb://localhost:27017/devXperience', (err, db) => {
            if (err) reject(err)
            resolve(db)

        })
    })
}

let getCollectionList = (db) => {
    return new Promise((resolve, reject) => {
        db.collection('alunos').find().toArray((err, result) => {
            if (err) reject(err)
            resolve(result)
        })
    })
}

