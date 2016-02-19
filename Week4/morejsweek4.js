
//for arrays use for
// for (var i = 0: i < something.length; i += 1)


//for dictionarys use for in

// var dict = {
// a:1,
// b:2,
// c:3,
// d:4
// };
//
//
//
// for (key in dict) {
//   console.log('key:', key, 'val:', dict[key]);
// }
//
// console.log("a", "b", "c", "d")




// function sleep_in(a,b) {
//   if (a === "weekend" && b ==="vacation") {
//       return console.log("FALSE");
//   } else if (b === "vacation") {
//       return console.log("FALSE");
//   } else if (a === "weekend") {
//       return console.log("ewrwerw");
//   } else {
//       return console.log("elsish");
//   }
// }
//
// console.log(sleep_in(false, false));
// console.log(sleep_in(true, false));
// console.log(sleep_in("weekend", "vacation"));


function juan(a) {
  var lowera = a.toLowerCase()
  var happy = ("!")
  return console.log("Hello", lowera.charAt(0).toUpperCase() + lowera.slice(1).concat(happy))
}

console.log(juan("SHERI"))
