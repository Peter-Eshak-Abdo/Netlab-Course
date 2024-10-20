function myFunction() {
  var element = document.body;
  element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";
}

/* Start Draft index.html */
/* const pos = document.getElementById("ip");
function getGeolocation() {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    pos.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  pos.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred.";
      break;
  }
}*/
/* End Draft index.html */
