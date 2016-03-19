'use strict'
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const EventSearchBar = require('./EventSearchBar.js');
const Nav = require('../nav.js');
const $ = require('jquery');
const EventSearchResults = require('./eventSearchResults.js')

const EventView = React.createClass({
  getInitialState: function(){
      return {
        searchResults: {}
      }
  },

  // findMeetUps: function(searchTerm){
  //   const that = this;
  //   const searchZip = {zip: searchTerm}
  //   $.get('/events', searchZip)
  //   .done(function(data){
  //     that.state.searchResults = data;
  //     that.setState({searchResults: that.state.searchResults})
  //     // sets state to array of objects
  //     // objects are groups in relation to zipcode entered
  //   })
  //   .error( (error) => {
  //     console.log(error);
  //   })
  // },

  render: function(){
    return (
      <div>
        <nav className="navbar">
          <nav className="map-nav"><Link to="/">Map</Link></nav>
          <nav className="nav-header">Climate Change Map</nav>
        </nav>
        <EventSearchBar findMeetUps={this.findMeetUps} showGroups={this.displayMeetUpGroups}/>
      </div>
    )
  }
})

module.exports = EventView;
