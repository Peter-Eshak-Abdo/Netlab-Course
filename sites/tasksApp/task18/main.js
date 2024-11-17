var fName = "Peter Eshak";
var fullName = "Peter Eshak Abdo Gabra";
var age = 19;
var country = "Ismaillia";
var phoneNumber = "01221331602/01202224608";
var ranPerson = { gender: "male", age: 56, name: "John moheb" };

document.getElementById("name").innerText = fName;
document.getElementById("fName").innerText = fullName;
document.getElementById("age").innerHTML = age;
document.getElementById("phoneNum").innerText = phoneNumber;
document.getElementById("country").innerHTML = country;

document.getElementById("name-age").innerHTML =
  "My name is " + fName + " and my age: " + age;

age += 6;
document.getElementById("value").innerHTML = "My age after 6 years is: " + age;
document.getElementById("person").innerHTML =
  "a random person <br>" +
  "His gender is: " +
  ranPerson.gender +
  " his name is " +
  ranPerson.name +
  " and his age is: " +
  ranPerson.age;

var x = 26;
var y = 15;

document.getElementById("op1").innerHTML = x + y;
document.getElementById("op2").innerHTML = x * y;
document.getElementById("op3").innerHTML = x - y;
document.getElementById("op4").innerHTML = x / y;
document.getElementById("op5").innerHTML = x % y;
document.getElementById("op6").innerHTML = x ** y;
document.getElementById("op7").innerHTML = ++x; x--;
document.getElementById("op8").innerHTML = --x;
document.getElementById("op9").innerHTML = x > y;
document.getElementById("op10").innerHTML = x < y;
