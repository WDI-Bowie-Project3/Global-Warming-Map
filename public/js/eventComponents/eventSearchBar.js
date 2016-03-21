'use strict'
const React = require('react');
// const eventHelp = require('./event_helpers');
// having trouble with eventHelpers because they need to setState
// but don't have access to it, can't pass it b/c state
// shows up on the other side as props


const EventSearchBar = React.createClass({
  //contextTypes : {}
  //see login.js for more info if it ends up being required.
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },
  handleSubmit : function (event) {
    event.preventDefault();

    let searchTerm = this.refs.search.value;

    this.props.findMeetUps(searchTerm)
    //do thing with search term entered
    this.refs.searchForm.reset()
  },

  render : function(){
    return (
      <div className="searchContainer">
        <h1>Find Meet Up Groups</h1>
        <form ref="searchForm" results={[]} onSubmit={this.handleSubmit}>
          <label>
            <input ref="search" placeholder="Zipcode"></input>
            <button type="submit">Search</button>
          </label>
        </form>
      </div>
    )
  }
  //may need to do something like ...
  //let this.props.results = eventHelp.eventSearch(searchTerm);
  //instead?
})

module.exports = EventSearchBar;
