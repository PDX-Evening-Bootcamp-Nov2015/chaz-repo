
//loads the add item javascript upon page opening
window.onload = function() {
  document.getElementById("add_item").onclick = addinventoryitem;
  document.getElementById("remove_stock").onclick = remove_stock;
  document.getElementById("add_stock").onclick = add_stock;
};


//creation of blank inventory list
 var inventory = [];


// dont add the () after function for event listenr
//makeinventoryitem function is an array that stores name, price, instock
 function makeinventoryitem(name, price, in_stock) {
   this.name = name;
   this.price = price;
   this.in_stock = in_stock;
 }


 //add inventory item to list
 function addinventoryitem() {
var name = document.getElementById("name").value;
var price = document.getElementById("price").value;
// use .checked rather than value for checkboxes
var in_stock = document.getElementById("in_stock").checked;
var generic = new makeinventoryitem(name, price, in_stock);

// adds the name, price, instock of a new item to the inventory list
inventory.push(generic);

//calls the updatelist function once a new item has been created
updateList()

 }

//rerender the HTML list with the current state of the inventory array
//empties the HTML list
 function updateList() {
   document.getElementById("inventory").innerHTML = "";
   for (var i=0; i < inventory.length; i++) {
     addrow(inventory[i], i)
   }
 }


// add new item to the html page
// if checkbox is checked set the class to true and the textbox to yes
function addrow(generic, index) {
  var table = document.getElementById("inventory")
  var row = table.insertRow(-1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  // cell1.innerHTML I just put in the actual
  cell1.innerHTML = "<input type='checkbox' id='" + index + "' />";
  cell2.innerHTML = generic.name;
  cell3.innerHTML = generic.price;

//nice little if statement for displaying yes or no if the item is instock or not
  if (generic.in_stock == true) {
    cell4.className = "true";
    cell4.innerHTML = "Yes";
  } else if (generic.in_stock == false) {
    cell4.className = "false";
    cell4.innerHTML = "No";
  }
}

//getelementbytagname is the key to success
//remove function
//determine which items are checked
//determine the index of those items
//update the stock status of these items
//update the displayed list
function remove_stock() {
  for (var i=0; i < inventory.length; i++){
    if (document.getElementById(i).checked == true) {
      inventory[i].in_stock = false;
    }
  }
  updateList();
  }

  function add_stock() {
      for (var i=0; i < inventory.length; i++){
        if (document.getElementById(i).checked == true) {
          inventory[i].in_stock = true;
  }
}
  updateList();
}
