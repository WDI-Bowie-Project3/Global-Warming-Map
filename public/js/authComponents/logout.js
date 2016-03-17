'use strict'
const React = require('react');
const auth = require('./auth_helpers');

const Logout = React.createClass({
  componentDidMount: function() {
    auth.logout()
  },

  render: function() {
    return <p>You are now logged out</p>
  }
})

module.exports = Logout;
