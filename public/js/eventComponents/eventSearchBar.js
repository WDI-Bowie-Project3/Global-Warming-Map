'use strict'
const React = require('react');

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

    const searchTerm = this.refs.search.value;

    //do thing with search term entered
  },

  render : function(){


    return (
      <div className="searchContainer">
        <form onSubmit={this.handleSubmit}>
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
