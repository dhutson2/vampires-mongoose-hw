// 1. Require your node modules
const mongoose = require('mongoose')

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./vampire_app/models/vampire')
const vampireList = require('./vampire_app/populateVampires')

// 3. Connect your database and collection name
connectionString = 'mongodb://localhost/mongoose-vampires';
mongoose.connect(connectionString, {useNewUrlParser:true})
// 4. Open your mongoose connection
mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${connectionString}`)
})

mongoose.connection.on('disconnected', () => {
    console.log(`mongoose disconnected to ${connectionString}`)
})

mongoose.connection.on('error', () => {
    console.log(`mongoose error to ${connectionString}`)
})

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.collection.insertMany(vampireList,(err, data) => {
//     console.log("added provided vampire list")
//     mongoose.connection.close();
//   });
// ### Add some new vampire data
// Vampire.insert({
//     name: 'Jeff',
//     hair_color: 'red',
//     eye_color: 'brown',
//     dob: '7/2/1692',
//     loves: ['romance novels', 'pet snakes'],
//     location: 'London, England',
//     gender: 'm',
//     victims: 198
// }
// )
// console.log(vampireList)

/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender:'f'}, (err, vampires) =>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(vampires)
//     }
// })

// Vampire.find({victims:{$gt: 500}}, (err, vampires) =>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(vampires)
//     }
// })

// Vampire.find({victims:{$lte: 150}}, (err, vampires) =>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(vampires)
//     }
// })

// Vampire.find({victims:{$ne: 210234}}, (err, vampires) =>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(vampires)
//     }
// })

Vampire.find({victims:{
    $gt: 150,
    $lt: 500
}}, (err, vampires) =>{
    if(err){
        console.log(err)
    } else{
        console.log(vampires)
    }
})

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
