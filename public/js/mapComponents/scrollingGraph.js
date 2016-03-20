'use strict'
const React = require('react');
//might require jquery?
//will require d3, and probably the JSON file

//passed in year=this.props.yearShown from mapView
const ScrollingGraph = React.createClass({
  //possibly a handleHover to control year displayed in all mapview elements???? -> probably overambitious.

  render : function () {
    return (
    <p>placeholder for scrolling graph with year of {this.props.year}</p>
    )
  }

})

module.exports = ScrollingGraph;
