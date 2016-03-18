'use strict'
const React = require('react');
// const eventHelp = require('./event_helpers');

module.exports = ShowEvent;

const ShowEvent = React.createClass({


  render : function () {
    console.log(this.props.meetUpEvent, 'this.props.meetUpEvent');

    return (
      <p>PLACEHOLDER UNTIL WE HAVE MEETUP API UNDERSTOOD</p>
    )
  }

})
