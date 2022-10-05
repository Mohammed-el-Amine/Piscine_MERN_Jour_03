 const mongoose = require('mongoose');
// mongoose.connect('mongodb://amine:Superamine1%40@host:27042/mern-pool?retryWrites=true&w=majority');
// var db = mongoose.connection;
// db.on('error', console.log.bind(console, "connection rater"));
// db.once('open', function (callback) {
// 	console.log("connection OK");
// })

// const {MongoClient} = require('mongodb');
// async function main(){
//     /**
//      * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//      * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//      */
//     const uri = "mongodb://momo:Superamine1@host:27042/mern-pool";
 

//     const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });
//     console.log("  1  \n");
//     try {
//         // Connect to the MongoDB cluster
//         console.log("je suis le try 1\n")
//         await client.connect();
//         console.log("je suis le try 1.5\n")
 
//         // Make the appropriate DB calls
//         await  listDatabases(client);
 
//     } catch (e) {
//         console.error(e);
//         console.log("  2  \n")
//     } finally {
//         await client.close();
//         console.log("je suis le try 2\n")

//     }
//     console.log(' FINALE \n')
// }

// main().catch(console.error);

// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };





mongoose.connect('mongodb://localhost:27042/mern-pool',
{
    useNewUrlParser: true,
    // useFinderAndModify: false,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection failed."));
db.once("open",function (){
    console.log("Connection successfull.");
})