'use strict'
const React = require('react');
const HoveredStateInfo = require('./hoveredStateInfo')
//require jquery?
//will require d3, and probably the JSON file

//passed in year=this.props.yearShown from mapView
const Map = React.createClass({

  //may want to position scrolling graph on top of map so that i can have hovered state info on bottom of map? do we want it in a hover box? will that update with new renders from new years? lots of ways to execute. we need to decide how we'd like to do it. position to the left or right instead of bottom? etc..
  handleHover : function () {
    //onMouseOver seems to be the equivalent of onHover
    if(JSON.element.onMouseOver){
      console.log('something');
      //do we implement statefulness here?
      /*
      hoveredState = {
        info about State (the territorial entity, not the React one), i.e. state, refTemp, anomaly, year in render
      }
      */
    }
  },
  render : function () {


    return (
      <div>
        <p>placeholder for map object, with year {this.props.year}</p>
        <HoveredStateInfo
          state="hovered state"
          refTemp="state's long-term reference temp"
          anomaly="anomaly for state for year shown"
          year={this.props.year}
          />
      </div>

    )
  }
})

module.exports = Map;
