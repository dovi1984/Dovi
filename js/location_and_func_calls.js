
var getLocation = function(days) {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var day_before = parseInt(days)-1;
        var result = new Date();
        result.setDate(result.getDate() + day_before)
        var dd = result.getDate();
        var mm = result.getMonth()+1; 
        var yyyy = result.getFullYear();
        extractEvent(lat, long,yyyy + '-' + mm + '-' + dd);
        showWeather(lat, long,day_before);
      })
    }
       else {
            window.alert("Could not get location");
      }
  }  
  
// getLocation();