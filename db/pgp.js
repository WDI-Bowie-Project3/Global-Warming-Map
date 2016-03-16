'use strict'
const pgp = require('pg-promise')();

var cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

var db = pgp(cn);

module.exports.addUser = (req,res,next) => {

  db.one("insert into users (name, email, password, zipcode) values($1,$2,$3,$4)",
  [ req.body.name, req.body.email, req.body.password, req.body.zipcode])
  .then(function(data) {
    res.rows= data;
    console.log('User', data.name , 'successfully added')
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}


module.exports.editUser = (req,res,next) => {

  db.one("UPDATE users SET name = $1, email = $2, password = $3, zipcode = $4 where user_id = $5)",
  [ req.body.name, req.body.email, req.body.password, req.body.zipcode, req.params.uID])
  .then(function(data) {
    console.log('user updated', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}
