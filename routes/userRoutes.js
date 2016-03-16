const express     = require('express');
const expressJWT  = require('express-jwt');
const jwt         = require('jsonwebtoken');
const userRoutes  = express.Router();
const bodyParser  = require('body-parser');
const db          = require('../db/pgp.js');
const secret      = 'so totally secret';


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



// //:3000/users/:uID
// userRoutes.route('/:uID')
//   //allow user to see their basic info
//   .get(/*db.getSingleUser,*/ basicTest)
//
//   //allow user to update their basic info
//   .put(/*db.updateSingleUser,*/ basicTest)
//
//   //allow user to remove themselves
//   .delete(/*db.removeSingleUser,*/ basicTest)
//
// //:3000/users/:uID/events
// userRoutes.route('/:uID/events')
//   //allow user to get list of events they've signed up for
//   .get(/*db.getUserEventList,*/ basicTest)
//
// //:3000/users/:uID/events/:eID
// userRoutes.route('/:uID/events/:eID')
//   //get info about a single even that is on a user's event list. this should be used to fill out list at '/:uID/events' above
//   .get(/*db.showSingleEventOnUserEventList,*/ basicTest)
//
//   //add event to a user's event list -> 'user signs up for this event'
//   .post(/*db.addEventToUserEventList,*/ basicTest)
//
//   //opposite of above. remove an event from a user's event list -> 'user decides not to go to this event'
//   .delete(/*db.removeEventToUserEventList,*/ basicTest)




module.exports = userRoutes;
