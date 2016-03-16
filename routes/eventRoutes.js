'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./../db/pgp');

const eventRoutes = express.Router();
module.exports = eventRoutes;

const basicTest = (req,res) => {
  res.send( `${req.method} succeeded, but is not yet implemented.` );
}
