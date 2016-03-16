'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./../db/pgp');

const userRoutes = express.Router();
module.exports = userRoutes;

const basicTest = (req,res) => {
  res.send( `${req.method} succeeded, but is not yet implemented.` );
}

//:3000/users/
userRoutes.route('/')
  //add new user
  .post(/*db.addUser,*/ basicTest)

//:3000/users/:uID
userRoutes.route('/:uID')
  //allow user to see their basic info
  .get(/*db.getSingleUser,*/ basicTest)

  //allow user to update their basic info
  .put(/*db.updateSingleUser,*/ basicTest)

  //allow user to remove themselves
  .delete(/*db.removeSingleUser,*/ basicTest)

//:3000/users/:uID/events
userRoutes.route('/:uID/events')
  //allow user to get list of events they've signed up for
  .get(/*db.getUserEventList,*/ basicTest)

//:3000/users/:uID/events/:eID
userRoutes.route('/:uID/events/:eID')
  //get info about a single even that is on a user's event list. this should be used to fill out list at '/:uID/events' above
  .get(/*db.showSingleEventOnUserEventList,*/ basicTest)

  //add event to a user's event list -> 'user signs up for this event'
  .post(/*db.addEventToUserEventList,*/ basicTest)

  //opposite of above. remove an event from a user's event list -> 'user decides not to go to this event'
  .delete(/*db.removeEventToUserEventList,*/ basicTest)
