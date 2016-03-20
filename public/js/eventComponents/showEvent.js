'use strict'
const React = require('react');
// const eventHelp = require('./event_helpers');

module.exports = ShowEvent;

const ShowEvent = React.createClass({


  render : function () {
    console.log(this.props.meetUpEvent, 'this.props.meetUpEvent');
//not working
    return (
      <div>
        {this.props.details.name}
      </div>
    )
  }

})
