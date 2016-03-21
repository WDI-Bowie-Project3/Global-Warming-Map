'use strict'
const React = require('react');
const ReactRouter = require('react-router');
const $ = require('jquery');
const _ = require('underscore');
const d3 = require('d3');
const topojson = require('topojson')
const mystates = require('./test.js');
const dataStates = require('./us-10m.json')

const MapView = React.createClass({
  getInitialState: function(){
    return {
      states: mystates,
      currentyear: 0,
      displayyear: 1895
    }
  },

  dddMap : function(passObject, year) {
    var states = passObject

    // code reference: https://github.com/cyrus-shahrivar/refugeeDataViz/blob/master/public/app.js  for order of the states
    ////////////////////////////////////////////////// VARIABLES //////////////////////////////////////////////////
    //holds the geographic objects for identifying the order of states drawn in the SVG
    var statesGeoArray = [];
    //these two arrays are used to correspond state graphic drawing order to an alphabetical list of stats contained in the dataset
    var drawnOrderStatesAbrArray = ["WASHINGTON", "MONTANA", "IDAHO", "NORTH DAKOTA", "MINNESOTA", "MAINE",
                                    "MICHIGAN", "WISCONSIN", "OREGON", "SOUTH DAKOTA", "NEW HAMPSHIRE", "VERMONT",
                                    "NEW YORK", "WYOMING", "IOWA","NEBRASKA", "MASSACHUSETTS", "ILLINOIS", "PENNSYLVANIA",
                                    "CONNECTICUT", "RHODE ISLAND", "CALIFORNIA", "UTAH", "NEVADA", "OHIO", "INDIANA",
                                    "NEW JERSEY","COLORADO","WEST VIRGINIA","MISSOURI", "KANSAS", "DELAWARE", "MARYLAND",
                                    "VIRGINIA","KENTUCKY", "DISTRICT OF COLUMBIA", "ARIZONA", "OKLAHOMA", "NEW MEXICO",
                                    "TENNESSEE", "NORTH CAROLINA", "TEXAS", "ARKANSAS","SOUTH CAROLINA", "ALABAMA","GEORGIA",
                                    "MISSISSIPPI","LOUISIANA","FLORIDA","HAWAII","ALASKA"];
    var drawnOrderStatesNumberArray = [47,26,12,34,23,19,22,49,37,41,29,45,32,50,15,27,21,13,38,6,39,4,44,28,35,14,30,5,48,25,
                                      16,7,20,46,17,8,2,36,31,42,33,43,3,40,0,10,24,18,9,11,1];


    // this is setting the area of the map
    var width = 960,
        height = 500,
        centered;
    // this is initializing the map type
    var projection = d3.geo.albersUsa()
        .scale(1070)
        .translate([width / 2, height / 2]);

    var path = d3.geo.path()
        .projection(projection);
    // we append svg to the map id.
    var svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height);

    svg.append("rect")
        .attr("className", "background")
        .attr("width", width)
        .attr("height", height)
        .on("click", clicked);

    var g = svg.append("g");
    var colors;
    // draw the map
    function drawTheMap(temperatureArr) {
      g.append("g")
          .attr("id", "states")
          .selectAll("path") // selects path elements, will make them if they don't exist
            .data(topojson.feature(dataStates, dataStates.objects.states).features)    // iterates over geo feature
            .enter().append("path")  // adds feature if it doesn't exist as an element  / // defines element as a path
          .attr("d", path)  // path generator translates geo data to SVG
          .on("click", clicked)
          .transition()
          .duration(400)
          .attr("fill", function(d,i) {
            statesGeoArray.push(dataStates.objects.states.geometries[i].id);

            colors = d3.scale.linear()  //scale refers to pixels. other option is .orginal scale.
              .domain([ d3.min(temperatureArr.slice(0,122)),d3.max(temperatureArr.slice(0,122))])  //Data difference, check the largers number and set it as mex.
              .range(['#BDEEFF','#b30000'])  // We can use .range or rangePoints.
              return colors(temperatureArr.slice(0,122)[drawnOrderStatesNumberArray[i]]);
            });

      g.append("path")
          .datum(topojson.mesh(dataStates, dataStates.objects.states, function(a, b) { return a !== b; }))
          .attr("id", "state-borders")
          .attr("d", path);
    }
    // AllTemperatures data for 100 years
    var AllTemparatures = [];
    for (var i = 0; i < Object.keys(states[0]['NY']).length; i++) {
      AllTemparatures.push([]);
    }

    $.each(states[0], function(key, data){
      var i = 0;
      _.each(data, function(d, key) {
        // console.log(d);
        AllTemparatures[i].push(d.anomaly);
        i++;
      });
    })

    drawTheMap(AllTemparatures[year])


    // zooming effect when click
    function clicked(d) {
      var x, y, k;

      if (d && centered !== d) {
        var centroid = path.centroid(d);
        x = centroid[0];
        y = centroid[1];
        k = 4;
        centered = d;
      } else {
        x = width / 2;
        y = height / 2;
        k = 1;
        centered = null;
      }

      g.selectAll("path")
          .classed("active", centered && function(d) { return d === centered; });

      g.transition()
          .duration(750)
          .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
          .style("stroke-width", 1.5 / k + "px");
    }
  },
  componentDidMount: function(){
  var counter = 0
  var yearChange = function() {
    counter ++
    if (counter === 120){
      counter = 0
      this.setState({displayyear: 1895})
    } else {
      this.setState({
        currentyear: counter,
        displayyear: this.state.displayyear + 1
      })
      $('#map').empty();
      this.dddMap(this.state.states, this.state.currentyear)
    }
  }
    setInterval(yearChange.bind(this),1000);
  },

  render: function(){
    return (
      <div>
      <h1>Year: {this.state.displayyear}</h1>
      <div id ="map">
      </div>
      </div>
    )
  }
})

module.exports = MapView;
