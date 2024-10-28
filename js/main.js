function myFunction() {
  var element = document.body;
  element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";
}

/* Start Draft index.html */
/*const pos = document.getElementById("IPaddress");

onload = function getGeolocation() {
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
let names = ["Peter", "Eshak", "Abdo", "Gabra"];
let ages = ["19 years old","56 years old","62 years old","59 years old"]


let container = document.createElement("div");
document.body.appendChild(container);
container.style.textAlign = "center";

function element(names,ages) {
  // Element
  let card = document.createElement("div");
  let title = document.createElement("h2");
  let age = document.createElement("p");
  let img = document.createElement("img");

  // Content
  let head = document.createTextNode(names);
  let ageContent = document.createTextNode(ages);
  img.src = "../../images/face.jpg";
  img.alt = "Error src of image";
  title.appendChild(head);
  age.appendChild(ageContent);

  // Style
  card.style.width = "200px";
  card.style.background = "#444";
  card.style.color = "#fff";
  card.style.padding = "10px";
  card.style.margin = "3px";
  card.style.display = "inline-block";
  img.style.width = "100%";

  card.appendChild(title);
  card.appendChild(age);
  card.appendChild(img);
  container.appendChild(card);
}
for (let i = 0; i < 4; i++) {
  element(names[i],ages[i]);
}


/* End Draft index.html */
