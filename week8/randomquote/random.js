//loads the pullquote function and newquote event listener upon page load
window.onload = function (){
  pullQuote();
  document.getElementById('newQuote').addEventListener('click', pullQuote);
}

//pulls a json containing a quote from remote server
function pullQuote (event){
var xmlhttp = new XMLHttpRequest ();
xmlhttp.onreadystatechange = function () {
//ensures that the page is valid and fully loaded
  if (xmlhttp.status === 200 && xmlhttp.readyState === 4) {
    quoteS = JSON.parse(xmlhttp.responseText);
  //takes parsed JSON data and fills in the HTML quote and author tags
    document.getElementById('quote1').innerHTML = quoteS.quote;
    document.getElementById('author').innerHTML = quoteS.author;
  }
}
//connection server containing JSON
xmlhttp.open("GET", "http://54.68.253.162/StudentWork/api-3.0.json", true);
xmlhttp.send();
}
