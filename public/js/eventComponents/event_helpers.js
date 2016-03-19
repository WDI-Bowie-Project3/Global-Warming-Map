const $ = require('jquery');

module.exports = {

    findMeetUps: function(searchTerm){
      const that = this;
      const searchZip = {zip: searchTerm}
      $.get('/events', searchZip)
      .done(function(data){
        that.state.searchResults = data;
        that.setState({searchResults: that.state.searchResults})
        // sets state to array of objects
        // objects are groups in relation to zipcode entered
      })
      .error( (error) => {
        console.log(error);
      })
    }

  }
