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
      console.log(signupInfo)
      this.refs.createUserForm.reset();
  },

  render: function(){
    return (
      <form ref="createUserForm" onSubmit={this.handleSubmit}>
        <label><input ref="name" placeholder="Name" /></label>
        <label><input ref="zipcode" placeholder="zipcode" /></label>
        <label><input ref="email" placeholder="email" /></label>
        <label><input ref="password" placeholder="password" /></label>
        <button type="submit">Sign Up</button>
      </form>
    )
  }
})


function signUpRequest(signupInfo) {

  const d = signupInfo

 $.post('/users', d)
   .done((data) => {
     console.log("signup post : ", data);
   })
   .error((error) => {
     console.log(error);
   })
}

module.exports = SignUp;
