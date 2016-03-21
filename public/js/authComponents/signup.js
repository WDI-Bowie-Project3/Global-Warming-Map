'use strict'
const React = require('react');
const auth = require('./auth_helpers');
const $ = require('jquery');

const SignUp = React.createClass({
  handleSubmit: function(event){
      event.preventDefault();
      const signupInfo = {
        name: this.refs.name.value,
        zipcode: this.refs.zipcode.value,
        email: this.refs.email.value,
        password: this.refs.password.value,
      }

      signUpRequest(signupInfo);
      this.refs.createUserForm.reset();
  },

  render: function(){
    return (
      <nav className="aside-1">
      <form ref="createUserForm" onSubmit={this.handleSubmit}>
        <label><input ref="name" placeholder="Name" /></label>
        <label><input ref="zipcode" placeholder="zipcode" /></label>
        <label><input ref="email" placeholder="email" /></label>
        <label><input ref="password" placeholder="password" /></label>
        <button type="submit">Sign Up</button>
      </form>
      </nav>
    )
  }
})


function signUpRequest(signupInfo) {

  const d = signupInfo

 $.post('/users', d)
   .done((data) => {
   })
   .error((error) => {
     console.error(error);
   })
}

module.exports = SignUp;
