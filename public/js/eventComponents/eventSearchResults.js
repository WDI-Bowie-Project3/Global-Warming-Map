'use strict'
const React = require('react');
const eventHelp = require('./event_helpers');
const ShowEvent = require('./showEvent'); //this may move to "basics" folder???
const _ = require('underscore')
const EventSearchResults = React.createClass({

  render : function() {
    // let list = this.props.results;
    // let listLength = list.length;
    let display = ['a','b'];
    // for(let i=0; i<listLength; i++){
    //   display.push(list[i]);
    // }
    console.log(this.props.results, 'this.props.results before render in EventSearchResults');
    //each el below is hopefully
    // return (
    //   <ul>
    //     {this.props.results.map( (el) => {
    //       return <li><ShowEvent meetUpEvent={el} /></li>
    //     })}
    //   </ul>
    //
    // ) try this when you actually have props
    // {display.map( (el) => {
    //   return <li><ShowEvent meetUpEvent={el} key={new Date()} /></li>
    // })}
    // line 32 logs each groupevent as an object
    // line 33 does not show up on the page??
    return (
      <ul>
        {_.map(this.props.searchResults).forEach((obj)=>{
          console.log(obj);
          return <li>{obj.name}</li>
        })}
      </ul>
    )
  }
})
module.exports = EventSearchResults;
