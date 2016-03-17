'use strict'
const React = require('react');
const auth = require('./auth_helpers');

const SignUp = React.createClass({
  handleSubmit: function(event){
      event.preventDefault()
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label><input ref="name" placeholder="Name" /></label>
        <label><input ref="zipcode" placeholder="zipcode" /></label>
        <label><input ref="email" placeholder="email" /></label>
        <label><input ref="pass" placeholder="password" /></label>
        <button type="submit">Sign Up</button>
      </form>
    )
  }
})

module.exports = SignUp;
