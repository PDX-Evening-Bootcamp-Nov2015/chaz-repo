//windows onload function
window.onload = function() {
  document.getElementById("submit").onclick = randomnumber;
};


//function that takes in number of dice requested upon submittal and spits out random numbers 1-6
function randomnumber () {
var dicenumber = document.getElementById("dicenumber").value;
//dicelist is blank list that holds the random values
var dicelist = []
if (dicenumber >= 5 && dicenumber <= 10) {
for (var i=0; i < dicenumber; i++) {
  var rando = Math.random();
  rando = Math.floor(rando * 6);
  rando = rando + 1;
  dicelist.push(rando);
}
updateList()
addrow(dicelist)
}
//user may only enter a number between 5 and 10
else  {
  alert("Please enter a number between 5 and 10");
}
}

//clears the HTML in between rolls
function updateList() {
  document.getElementById("Dice").innerHTML = "";
}

//renders the dice on screen, creates additional row if 6 or more die requested
function addrow(dicelist) {
var table = document.getElementById("Dice");
var row = table.insertRow();
var row2 = table.insertRow();
//for 5 dice
for (var x=0; x < 5; x++){
var tempvariable = dicelist[x];
tempvariable = row.insertCell();
tempvariable.innerHTML = "<img  src=" + dicelist[x] +  '.png>';
console.log(dicelist[x]);
}
//for 6-10 dice
for (var x=5; x < dicelist.length; x++){
var tempvariable = dicelist[x];
tempvariable = row2.insertCell();
tempvariable.innerHTML = "<img  src=" + dicelist[x] +  '.png>';
console.log(dicelist[x]);
}
}
