'use strict'
const React = require('react');
const EventSearchBar = require('./EventSearchBar.js');
const Nav = require('../nav.js');

const EventView = React.createClass({
  render: function(){
    return (
      <div>
        <nav className="navbar">
          <nav>Map View</nav>
          <nav className="nav-header">Climate Change Map</nav>
        </nav>
        <EventSearchBar />
      </div>
    )
  }
})

module.exports = EventView;
