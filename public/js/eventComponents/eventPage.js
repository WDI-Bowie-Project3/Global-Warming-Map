'use strict'
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const EventSearchBar = require('./EventSearchBar.js');
const Nav = require('../nav.js');
const $ = require('jquery');

const EventView = React.createClass({
  getInitialState: function(){
      return {
        searchResult: {}
      }
  },

  findMeetUps: function(searchTerm){
    const searchZip = {zip: searchTerm}
    $.ajax('/events', searchZip)
    .done(function(data){
      console.log(data)
    })

  },

  render: function(){
    return (
      <div>
        <nav className="navbar">
          <nav className="map-nav"><Link to="/">Map</Link></nav>
          <nav className="nav-header">Climate Change Map</nav>
        </nav>
        <EventSearchBar findMeetUps={this.findMeetUps} />
      </div>
    )
  }
})

module.exports = EventView;
