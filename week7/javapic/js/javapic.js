//windows onload function
//loads functions upon opening webpage
window.onload = function() {
    addImages(imageList);
    getRandomImage();
    //setInterval rotates the picture every ten seconds
    setInterval(getRandomImage, 10000);
};
//takes the random item and inserts it into the css class image destination
function getRandomImage() {
    var randomList = addImages(imageList);
    var jumbo = document.getElementById("jumbotron");
    var randomItem = randomList[Math.floor(Math.random() * randomList.length)];
    jumbo.style.backgroundImage = "url(" + imagePath + randomItem + ")";
}
//empty array for holding images
var imageList = [];
//puts all image files into an array
function addImages(imageList) {
    for (i = 10; i < 61; i++) {
        imageList.push("pdxcg_" + i + ".jpg");
    }
    imageList.splice(0, 1);
    for (x = 1; x < 10; x++) {
        imageList.push("pdxcg_0" + x + ".jpg");
    }
    return imageList;
}
