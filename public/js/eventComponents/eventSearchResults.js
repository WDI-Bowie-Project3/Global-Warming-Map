'use strict'
const React = require('react');

const EventSearchResults = React.createClass({
  // getting weird error when I try to render 
  // React uncaught invariant violation objects are not valid as a React child
  render: function(){
    return (
      <div>
      {this.props.searchResults}
      </div>
    )
  }
})

module.exports = EventSearchResults;
