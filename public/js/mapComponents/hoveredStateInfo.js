const React = require('react');

//require jquery?
//will require d3, and probably the JSON file

const HoveredStateInfo = React.createClass({

  render : function () {
    return (
      <div>
        <ul>
          <li>{this.props.state}</li>
          <li>{this.props.refTemp}</li>
          <li>{this.props.anomaly}</li>
          <li>{this.props.year}</li>
        </ul>
      </div>
    )
  }
})

module.exports = HoveredStateInfo;
