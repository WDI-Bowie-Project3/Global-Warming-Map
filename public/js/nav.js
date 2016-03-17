'use strict'
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const auth = require('./auth_helpers');
const Login = require('./login.js');
const Logout = require('./logout.js');
const SignUp = require('./signup.js');

const Nav = React.createClass({
  render: function(){
    return (
      <nav className="navbar">
        <nav className="nav-header">Climate Change Map</nav>
        <nav>
        {this.props.loggedIn ? (
          <Link to="/logout">Log out</Link>
        ) : (
          <Link to="/login">Sign in</Link>
        )}
        </nav>
        <nav><Link to="/new">Sign Up</Link></nav>
      </nav>
    )
  }
})

module.exports = Nav;
