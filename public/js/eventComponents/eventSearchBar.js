'use strict'
const React = require('react');

const EventSearchBar = React.createClass({
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
})

module.exports = EventSearchBar;
