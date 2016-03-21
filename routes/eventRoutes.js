'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./../db/pgp');
const request = require('request');
const eventRoutes = express.Router();

const basicTest = (req,res) => {
  res.send( `${req.method} succeeded, but is not yet implemented. regular test` );
}
const basicTest1 = (req,res) => {
  res.send( `${req.method} succeeded, but is not yet implemented. test1` );
}

function makeRequest(req,res,next) {
  let conn = {
    url: 'https://api.meetup.com/2/events',
    qs: {
      key: process.env.apiKey,
      sign: true,
      group_urlname: 'Peoples-Climate-March-Satellite-Events'
    },
    json: true
  };
  request(conn, (err,res,body)=>{
    res.events = body;
    next()
  })
}

//:3000/events
eventRoutes.route('/')
  .get(function(req,res){
    request.get({
      url: 'https://api.meetup.com/find/groups',
      qs: {
        key: process.env.apiKey,
        sign: true,
        zip: req.query.zip,
        category: '4',
        page: '10'
      },
      json: true
    }, function(err,response,body){
      res.json(body)
    });
  })

//:3000/events/:eID
eventRoutes.route('/:eID')
  //see basic info about a single event
  .get(/* db.getSingleEventInfo */ basicTest)
//:3000/events/:eID/users
eventRoutes.route('/:eID/users')
  //list of who's going to this event
  .get(/* db.listUsersAttendingSpecificEvent */ basicTest1)

module.exports = eventRoutes;
