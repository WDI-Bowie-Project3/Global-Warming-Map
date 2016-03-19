'use strict'
const React = require('react');
const eventHelp = require('./event_helpers');
const ShowEvent = require('./showEvent'); //this may move to "basics" folder???

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
    return (
      <ul>
        {display.map( (el) => {
          return <li><ShowEvent meetUpEvent={el} key={new Date()} /></li>
        })}
      </ul>

    )
  }
})
module.exports = EventSearchResults;
