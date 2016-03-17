'use strict'
const React = require('react');
const auth = require('./auth_helpers');

const Logout = React.createClass({
  componentDidMount: function() {
    auth.logout()
  },

  render: function() {
    return <p className="aside-1">Logged Out!</p>
  }
})

module.exports = Logout;
