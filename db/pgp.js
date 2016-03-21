'use strict'
const bcrypt = require('bcrypt');
const salt   = bcrypt.genSaltSync(10);
const pgp    = require('pg-promise')({});

const cn = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
};

const db = pgp(cn);

function createSecure(email, password, callback) {
  //hashing the password given by the user at signup
  bcrypt.genSalt(function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      //this callback saves the user to our databoard
      //with the hashed password
      callback(email,hash);
    })
  })
}

function createUser(req, res, next) {
  createSecure(req.body.email, req.body.password, saveUser);

  function saveUser(email, hash) {
    db.none("INSERT INTO users (email, password_digest, name, zipcode) VALUES($1, $2, $3, $4);", [email, hash, req.body.name, req.body.zipcode])
    .then(function (data) {
      // success;
      next();
    })
    .catch(function () {
      // error;
      console.error('error signing up');
    });
  }
}

function loginUser(req, res, next) {
  var email = req.body.email
  var password = req.body.password

  db.one("SELECT * FROM users WHERE email LIKE $1;", [email])
    .then((data) => {
      if (bcrypt.compareSync(password, data.password_digest)) {
        res.rows = data
        next()
      } else {
        res.status(401).json({data:"Fool this no workie"})
        next()
      }
    })
    .catch(() => {
      console.error('error finding users')
    })
}


function editUser(req,res,next) {

  db.one("UPDATE users SET name = $1, email = $2, password = $3, zipcode = $4 where user_id = $5)",
  [ req.body.name, req.body.email, req.body.password, req.body.zipcode, req.params.uID])
  .then(function(data) {
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

function deleteUser(req,res,next) {

  db.none("delete from users where user_id=$1)",
  [req.params.uID])
  .then(function() {
    next();
  })
  .catch(function(error){
    console.error(error);
  })
};

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.editUser = editUser;
module.exports.deleteUser = deleteUser;
