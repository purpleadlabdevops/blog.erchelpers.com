const successCallback = (position) => {
  console.log(position)
  console.log(position.coords.latitude)
  console.log(position.coords.longitude)
  const latitude = 35.67524927287536
  const longitude = -118.78036309281335
  $.ajax({ url:'//maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDWS8pvsYm6Ap0nMJdatFU9l52xpW-zqHw&latlng='+latitude+','+longitude+'&sensor=true',
    success: function(data){
      console.dir(data)
      var state = data.results[0].address_components[5].long_name;
      console.log('State - '+state);
      document.getElementById('setState').innerHTML = state
    }
  })
}

const errorCallback = (error) => {
  console.log(error)
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback)