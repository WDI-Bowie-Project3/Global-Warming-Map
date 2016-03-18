const $ = require('jquery');

module.exports = {

  eventSearch : function(location) {
    let results=[];
    $.get('/searchEvents', location)
      .done( (data) => {
        //should be respons from a query for events that match the location entered in the search bar
        console.log(data, 'data from .get /searchEvents in event_helpers.js');

        results=['event1test','event2test']; //using this to test display
        // results=res.rows; //use this with actual query
        this.props.results = results;//do i need to return this and set a var equal to this function in eventSearchBar?

      })
      .error( (error) => {
        console.log(error, 'error from .get /searchEvents in event_helpers.js');
      })
  }
}
