//windows onload function
window.onload = function() {
  document.getElementById("submit").onclick = randomnumber;
};


//function that takes in number of dice requested upon submittal and returns random numbers 1-6
function randomnumber () {
var dicenumber = document.getElementById("dicenumber").value;
//dicelist is blank list that holds the random values
var dicelist = [];
for (var i=0; i < dicenumber; i++) {
  var rando = Math.random();
  rando = Math.floor(rando * 6);
  rando = rando + 1;
  dicelist.push(rando);
}
updateList();
addrow(dicelist);
//removes the dice image and associated credit once user submits dice number
document.getElementById('tempPicDiv').remove(document.getElementById('tempPic'));
document.getElementById('tempCredit').innerHTML = "";
}

//clears the HTML in between rolls
function updateList() {
  document.getElementById("Dice").innerHTML = "";
}

//renders the dice on screen
function addrow(dicelist) {
  var table = document.getElementById("Dice");
    for (i=0;i<dicelist.length;i++){
       var blankDiv = document.createElement('div');
       blankDiv.className = "w3-col w3-container m1";
       var blankImage = document.createElement('img');
       blankImage.src = dicelist[i]+'.png';
       blankDiv.appendChild(blankImage);
       table.appendChild(blankDiv);
    }
}
