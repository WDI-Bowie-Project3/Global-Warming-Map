$(document).ready(function(){
  console.log('connected')

_.map(states, (data)=>{
  console.log(data.AL[200512].value, "AL");
  console.log(data.AK[200512].value, "AK");
})


// var colors =  d3.scale.linear()
//   .domain([0, bardata.length ])   //check the largers number and set it as mex.
//   .range(['#80dfff', '#b30000']);


// console.log('looooooookkk', states[0].AL['201212'])
// var state = d3.selectAll('path').attr('fill', function(d){
//    var state_year = [];
//
// 	$.each(states, function(key, data){
//     var arr = Object.keys(data)
//     // console.log(arr)
//     for (var i in arr) {
//       var results = _.pluck( data[arr[i]],'anomaly')
//       // console.log( Math.max(results[0]),Math.min(results[0]) )
//       // console.log(arr[i], "i");
//       // gets the anomaly for each state in year 201012
// 		if(data[arr[i]][201012].anomaly>1.5){
//       $('#'+arr[i]).css('fill', '#b30000')
// 		} else if (data[arr[i]][201012].anomaly>1) {
//       $('#'+arr[i]).css('fill', 'Orange')
//     } else if (data[arr[i]][201012].anomaly>0) {
//       $('#'+arr[i]).css('fill', 'yellow')
//     } else if (data[arr[i]][201012].anomaly<=0) {
//       $('#'+arr[i]).css('fill', '#80dfff')
//     }
//    }
// 	})
// })


//
// var state_year = [];
// $.each(states[0], function(key, data){

var colors = d3.scale.linear()
  .domain([ (-1.0), 4 ])   //check the largers number and set it as mex.
  .range(['#80dfff', '#b30000']);

// var arr = [-3,-4,-6,1,5,7,8]
  // console.log(Object.keys(states[0]).length)
$.each(states[0], function(key, data){
  // console.log(key, 'key');
  console.log('key', key , 'data', data[201412].anomaly ) // each state[key] with all their years
  var state = d3.selectAll(`#${key}`).data(data[201412].anomaly)  //We should pass an array here
  // var state = d3.selectAll(`svg.childNodes`).data(data[201412].anomaly)  //We should pass an array here
          //change selectAll above to reference #id. IDs are caps.
          // data[0]
          // .enter()
          // .append('path')
          .style('fill', colors )
})


      //
      //       var arr = Object.keys(data)
      //       for (var i in arr) {
      //     data[arr[i]][201012].anomaly
      //         return colors;
      //     }
      //   })
      // })

})
