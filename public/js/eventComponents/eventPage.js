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
        searchResult: {elton: "hi"}
      }
  },

  findMeetUps: function(searchTerm){
    const that = this;
    const searchZip = {zip: searchTerm}
    $.get('/events', searchZip)
    .done(function(data){
      console.log(data);
      console.log("this.state : ",that.state.searchResult);
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
