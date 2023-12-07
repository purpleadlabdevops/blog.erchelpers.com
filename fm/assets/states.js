const successCallback = position => {
  $.ajax({ url:'//maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDWS8pvsYm6Ap0nMJdatFU9l52xpW-zqHw&latlng='+position.coords.latitude+','+position.coords.longitude+'&sensor=true',
    success: data => {
      const state = data.results[0].address_components[3].long_name;
      console.dir(data)
      if(state){
        document.getElementById('setState').innerHTML = `in ${state}`
      }
    }
  })
}

const errorCallback = (error) => {
  console.log(error)
}

navigator.geolocation.getCurrentPosition(successCallback, errorCallback)