$(document).ready(function(){
  console.log('connected')

_.map(states, (data)=>{
  console.log(data.AL[192512].value, "AL");
  console.log(data.AK[192512].value, "AK");
})

var state = d3.selectAll('path').attr('fill', function(d){

	$.each(states, function(key, data){
    var arr = Object.keys(data)
    console.log(arr)
    for (var i in arr) {
      console.log(arr[i], "i");
		if(data[arr[i]][201512].anomaly>1.5){
      $('#'+arr[i]).css('fill', 'Red')
		} else if (data[arr[i]][201512].anomaly>1) {
      $('#'+arr[i]).css('fill', 'Orange')
    } else if (data[arr[i]][201512].anomaly>0) {
      $('#'+arr[i]).css('fill', 'yellow')
    } else if (data[arr[i]][201512].anomaly<=0) {
      $('#'+arr[i]).css('fill', 'blue')
    }
  }
	})
})


})
