'use strict'
const React = require('react');
const eventHelp = require('./event_helpers');

//do we want button/input components, or just stick wtih html construction for these?
// const Button = require('./../basics/button');
// const Input = require('./../basics/input');


const EventSearchBar = React.createClass({
  //contextTypes : {}
  //see login.js for more info if it ends up being required.
  // contextTypes: {
  //   router: React.PropTypes.object.isRequired
  // },
  handleSubmit : function (event) {
    event.preventDefault();

    searchTerm = this.refs.search.value;

    //do thing with search term entered. have to pass that to eventSearchResults somehow
    eventHelp.eventSearch(searchTerm);

    //may need to do something like ...
    //let this.props.results = eventHelp.eventSearch(searchTerm);
    //instead?
  },

  render : function () {
    let searchTerm;

    return (
      <div className="searchContainer">
      <form
        results={[]}
        onSubmit={this.handleSubmit}>
        <label>
          <input
            ref="search"
            placeholder="STATEPLACEHOLDER"></input>
          <button
            type="submit">Search</button>
        </label>

      </form>
      </div>
    )
  }

})

module.exports = EventSearchBar;
