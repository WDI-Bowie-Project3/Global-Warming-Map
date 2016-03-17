'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./../db/pgp');

const eventRoutes = express.Router();
module.exports = eventRoutes;

const basicTest = (req,res) => {
  res.send( `${req.method} succeeded, but is not yet implemented. regular test` );
}
const basicTest1 = (req,res) => {
  res.send( `${req.method} succeeded, but is not yet implemented. test1` );
}


//:3000/events/searchEvents -> ?? this and the get below have a lot of reasons to be in the same space. not sure how I should be separating them.
eventRoutes.route('/searchEvents')
  //this will need to return a search bar component. events require location information to find them in API. once location is entered, we can hit the .get on '/'
  .get(/* db.searchEventsByCriteria */ basicTest)


//:3000/events
eventRoutes.route('/')
  //use info from search bar above to get a collection of events
  .get(/* db.showEventsBasedOnInput */ basicTest)
  // .post() -> not used. users cannot create new events, only find ones already @ meetup

//:3000/events/:eID
eventRoutes.route('/:eID')
  //see basic info about a single event
  .get(/* db.getSingleEventInfo */ basicTest)

  // .put() -> not used. event info comes from API, users will not be able to alter event-specific information.
  // .delete() -> not used. users can remove an event from their list, but not an event from meetup API

//:3000/events/:eID/users
eventRoutes.route('/:eID/users')
  //list of who's going to this event
  .get(/* db.listUsersAttendingSpecificEvent */ basicTest1)
