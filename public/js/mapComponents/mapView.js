'use strict'
const React = require('react');


const MapView = React.createClass({


  render : function () {


    return (
      <div id="mapViewContainer">
        <ul>
          <li>{this.props.yearShown}</li>
        </ul>

      </div>
    )
  }
})

module.exports = MapView;
