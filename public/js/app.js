'use strict'
const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');


//do we want to start implementing the 'import' pattern?
// import { browserHistory } from 'react-router';
const browserHistory = require('react-router');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;

const App = React.createClass({
  getInitialState () {

    return {
      placeholderObj: {}
    }

  },

  placeholderAuth (loggedIn) {
    //stuff to update auth?
  },

  componentWillMount () {
    //stuff to trigger on App mount/render
  },

  render () {


    return(
      <div>

        <NavBar></NavBar>
        <DisplayMapOrEvents></DisplayMapOrEvents>
        <Footer>{/* i don't think we actually have a footer */}</Footer>

      </div>
    )
  }
})

function placeholderRequireAuth (a,b) {
  //stuff for auth
}



ReactDOM.render(
  <Router
    history = {browserHistory}
    >
    <Route
      path = "/"
      component = {App}>
      <Route
        path = "Login"
        component = {Login}>
      </Route>
      <Route
        path = "Logout"
        component = {Logout}>
      </Route>
      <Route
        path = "/UserEventList"
        component = {UserEventList}
        onEnter = {requireAuth}> {/* contingent upon 'state' of map/event button. requireAuth isn't actually defined yet */}
        <Route
          path = "/SpecificEvent"
          component = {SpecificEvent}>
          {/* I'm not going to drill down into exactly what SpecificEvent shows, but it will likely be info and buttons */}
        </Route>

      </Route>
      <Route
        path = "/Map"
        component = {Map}> {/* contingent upon 'state' of map/event button */}

      </Route>


    </Route>

  </Router>
 document.querySelector('#container') );
