window.onload = function() {
  document.getElementById("1").onclick = opentab1;
  document.getElementById("2").onclick = opentab2;
};

function opentab1(){
  document.getElementById("p2").style.display = "none";
  document.getElementById("p1").style.visibility = "visibile";
}

function opentab2(){
  document.getElementById("p1").style.display = "none";
  document.getElementById("p2").style.visibility = "visibile";
}
