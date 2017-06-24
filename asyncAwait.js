const Koa = require('koa');
const app = new Koa();
const MongoClient = require('mongodb');
const co = require('co');


app.use(async function (ctx) {

    try {
        let db = await connectMongoDB();
        let result = await getCollectionList(db);
        ctx.body = result;
    } catch (error) {
        ctx.body = error;
    }

});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})


let connectMongoDB = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect('mongodb://localhost:27017/netcoders', (err, db) => {
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