'use strict'
const React = require('react');
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const EventSearchBar = require('./EventSearchBar.js');
const Nav = require('../nav.js');
const $ = require('jquery');


const MapView = React.createClass({
  // getInitialState: function(){
  //     return {
  //       years: {}
  //     }
  // },

  render: function(){
    console.log('connected to us_map.js')
    return (
      <div>
      <p>Test</p>
      </div>
    )
  }

})

module.exports = MapView;
