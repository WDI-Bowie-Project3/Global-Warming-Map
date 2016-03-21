'use strict'
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const EventSearchBar = require('./EventSearchBar.js');
const Nav = require('../nav.js');
const $ = require('jquery');
const _ = require('underscore')


const EventView = React.createClass({
  getInitialState: function(){
      return {
        searchResults: []
      }
  },

  findMeetUps: function(searchTerm){
    const that = this;
    const searchZip = {zip: searchTerm}
    $.get('/events', searchZip)
    .done(function(data){
      that.state.searchResults = data;
      that.setState({searchResults: that.state.searchResults})
      // sets state to array of objects
      // objects are groups in relation to zipcode entered
    })
    .error( (error) => {
      console.error(error);
    })
  },

  addGroup: function(e) {
    e.preventDefault();

  },

  render: function(){
    let newArray = [];
    this.state.searchResults.forEach((el)=>{
      newArray.push(el)
    })

    return (
      <div>
        <nav className="navbar">
          <nav className="map-nav"><Link to="/">Map</Link></nav>
          <nav className="nav-header">Climate Change Map</nav>
        </nav>
        <EventSearchBar findMeetUps={this.findMeetUps} />
        <div className="container">
        {newArray.map((obj)=>{
          return (
            <div className="inner-container">
              <div className="header">{obj.name}</div>
              <div>Members: {obj.members}</div>
              {obj.group_photo ? <img className="group-pics" src={obj.group_photo.highres_link}/> : <div>No Photo Available</div>}
              <div><button className="add-buton" ref="addButton" onClick={this.addGroup} type="submit">Add</button></div>
            </div>
        )
        })}
        </div>
      </div>
    )
  }
})

module.exports = EventView;
