'use strict'
const express       = require('express');
const path          = require('path');
const morgan        = require('morgan');
const bodyParser    = require('body-parser');
const pgp           = require('pg-promise')();
const request       = require('request');

const app = express();

// app.set('views', './views')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('dev'))

// not actually doing anything, serving root route from public folder
app.get('/', (req,res)=>{
  res.sendFile('index.html')
})




const port = process.env.PORT || 3000;
const server = app.listen(port, ()=>{
  console.log("running on port:", port)
})
