// 1. Require your node modules
const mongoose = require('mongoose')

// 2. Require your model (and possibly your extra data source);
const Vampire = require('./vampire_app/models/vampire')
const vampireList = require('./vampire_app/populateVampires')
const bodyParse = require('body-parser')

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

// Vampire.find({victims:{
//     $gt: 150,
//     $lt: 500
// }}, (err, vampires) =>{
//     if(err){
//         console.log(err)
//     } else{
//         console.log(vampires)
//     }
// })

/////////////////////////////////////////////////
// ### Select by exists or does not exist 
// Vampire.find({
//     title: {$exists: true}
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

// Vampire.find({
//     title: {$exists: false}
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

// Vampire.find({
//     title: {$exists: true},
//     victims: 0
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

// Vampire.find({
//     victims: {$ne: 0, $gt: 1000},
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })
/////////////////////////////////////////////////
// ### Select with OR
// Vampire.find({
//         location: {
//             $in: ['New York, New York, US', 'New Orleans, Louisiana, US']
//         }
//         }, (err, vampires) => {
//             if(err){
//                 console.log(err, "<--err");
//             } else {
//                 console.log(vampires, "<-- vampire");
//             }
//         })

// Vampire.find({
//     loves: {
//         $in: ['brooding', 'being tragic']
//     }
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

// Vampire.find({
//     loves: {
//         $in: ['marshmallows']
//     },
//     victims:{
//         $gt: 1000
//     }
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

// Vampire.find({
//     hair_color: {
//         $in: ['red']
//     },
//     eye_color:{
//         $in: ['green']
//     }
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

/////////////////////////////////////////////////
//### Select objects that match one of several values

// Vampire.find({
//     loves: {
//         $in: ['frilly shirtsleeves', 'frilly collars']
//     }
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

// Vampire.find({
//     loves: {
//         $in: ['brooding']
//     }
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

// Vampire.find({
//     loves: {
//         $in: ['appearing innocent', 'trickery', 'lurking in rotting mansions', 'R&B music']
//     }
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

// Vampire.find({
//     loves: {
//         $in: ['fancy cloaks'],
//         $nin: ['top hats', 'virgin blood']
//     }
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

/////////////////////////////////////////////////
//### Negative Selection

// Vampire.find({
//     loves: {
//         $nin: ['fancy cloaks','frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']
//     }
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

// Vampire.find({
//     victims: {
//         $lte: 200
//     }
//     }, (err, vampires) => {
//         if(err){
//             console.log(err, "<--err");
//         } else {
//             console.log(vampires, "<-- vampire");
//         }
//     })

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

// Vampire.findOneAndUpdate(
//     { name: 'Claudia' }, // search criteria of what to update
//     { $set: { 
//         name: 'Eve',
//     } }, // how to update it
//     { new : true }, // tells findOneAndUpdate to return modified article, not the original
//     (err, vampire)=>{
//       console.log(vampire);
//     });

// Vampire.findOneAndUpdate(
//         { gender: 'm' }, // search criteria of what to update
//         { $set: { 
//             name: 'Guy Man' 
//         } }, // how to update it
//         { new : true }, // tells findOneAndUpdate to return modified article, not the original
//         (err, vampire)=>{
//           console.log(vampire);
//         });


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

// Vampire.findOneAndUpdate(
//     { name: 'Guy Man' }, // search criteria of what to update
//     { $set: { 
//         gender: 'f' 
//     } }, // how to update it
//     { new : true }, // tells findOneAndUpdate to return modified article, not the original
//     (err, vampire)=>{
//       console.log(vampire);
//     });

    // Vampire.findOneAndUpdate(
    //     { name: 'Eve' }, // search criteria of what to update
    //     { $set: { 
    //         gender: 'm' 
    //     } }, // how to update it
    //     { new : true }, // tells findOneAndUpdate to return modified article, not the original
    //     (err, vampire)=>{
    //       console.log(vampire);
    //     });

    // Vampire.findOneAndUpdate(
    //     { name: 'Guy Man' }, // search criteria of what to update
    //     { $rename: { 
    //         'loves' : 'hates'
    //     }, $set: {
    //         'hates.$' : ['clothes', 'jobs']
    //     }
    //     }, // how to update it
    //     { new : true }, // tells findOneAndUpdate to return modified article, not the original
    //     (err, vampire)=>{
    //       console.log(vampire);
    //     });

        // Vampire.updateMany(
        // { gender: 'f' }, // search criteria of what to update
        // { $set: { 
        //     gender: 'fems' 
        // } }, // how to update it
        // { new : true }, // tells findOneAndUpdate to return modified article, not the original
        // (err, vampire)=>{
        //   console.log(vampire);
        // });

// console.log(vampireList)

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
