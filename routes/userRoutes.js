const express     = require('express');
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');
const userRoutes  = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pgp.js');
const secret      = 'so totally secret';


const basicTest = (req,res) => {
  res.send( `${req.method} succeeded, but is not yet implemented.` );
}
const basicTest1 = (req,res) => {
  res.send( `${req.method} succeeded, but is not yet implemented. test1` );
}

userRoutes.route('/')
  .get( (req, res) => {
    res.json( { data: 'success' } )
  })
  .post(db.createUser, ( req, res ) => {
    res.status(201).json( { data: 'success' } );
  });

userRoutes.post('/login', db.loginUser, ( req, res ) => {
  var token = jwt.sign( res.rows, secret );

  res.json( { agent: res.rows, token: token } );
})


//:3000/users/:uID/events
userRoutes.route('/:uID/events')
  //allow user to get list of events they've signed up for
  .get(/*db.getUserEventList,*/ (req,res)=>{
    res.send('hit the get user info route')
  })
//   //does this pull from a join table? then do something with the event IDs to bring up the info? the 'something with event IDs' is probably the '/:uID/events/:eID' route below
//   //*****'UserEventList' sounds like a join table *****
//
// //:3000/users/:uID/events/:eID
// userRoutes.route('/:uID/events/:eID')
//   //get info about a single even that is on a user's event list. this should be used to fill out list at '/:uID/events' above
//   .get(/*db.showSingleEventOnUserEventList,*/ basicTest1)
//
//
//   //add event to a user's event list -> 'user signs up for this event'
//   .post(/*db.addEventToUserEventList,*/ basicTest)
//
//   //opposite of above. remove an event from a user's event list -> 'user decides not to go to this event'
//   .delete(/*db.removeEventFromUserEventList,*/ basicTest)
module.exports = userRoutes;
