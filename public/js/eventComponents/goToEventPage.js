'use strict'
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;


const GoToEventPage = React.createClass({
  render: function(){
    return (
      <nav>
        <Link to="/users/:uID/events">Events</Link>
      </nav>
    )
  }
})

module.exports = GoToEventPage;
