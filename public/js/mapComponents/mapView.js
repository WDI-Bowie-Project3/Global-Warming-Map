'use strict'
const React = require('react');
const Map = require('./mapComponent');
const ScrollingGraph = require('./scrollingGraph');

//pass in yearShown as prop
const MapView = React.createClass({

  //making executive decision to move the <HoveredStateInfo /> component to inside the <Map /> component
  render : function () {


    return (
      <div id="mapViewContainer">
        <ul>
          <li>{this.props.yearShown}</li>
          <li><Map year={this.props.yearShown}/></li>
          <li><ScrollingGraph year={this.props.yearShown}/></li>
        </ul>

      </div>
    )
  }
})

module.exports = MapView;
