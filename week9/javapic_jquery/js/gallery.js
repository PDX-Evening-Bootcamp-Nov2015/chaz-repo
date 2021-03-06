$(document).ready(function() {

    window.onload = function() {
        //pulls the username form that was inputted on the join form from sessionstorage
        userStore = sessionStorage.getItem('username');
        //adds the stored username to the page banner
        tag = $(".tagline")[0];
        tag.innerHTML = "" + userStore + " develop something beautiful"
            //the displayGallery function shows all images on the page at once
        displayGallery();
        //adds the event listener for closing the lightbox
        $(document).on("click", lightBoxClose);
    }

    //imageMaster is a variable for the addImages function
    var imageMaster = addImages();
    var galleryHolder = document.getElementById("gallery");

    //function creates a list of all images in the /images folder and returns
    //an array named imageList
    function addImages() {
        var imageList = [];
        for (i = 10; i < 61; i++) {
            imageList.push("pdxcg_" + i + ".jpg");
        }
        imageList.splice(0, 1);
        for (x = 1; x < 10; x++) {
            imageList.push("pdxcg_0" + x + ".jpg");
        }
        return imageList;
    }

    //displays all images on the page.
    function displayGallery() {
        for (z = 0; z < imageMaster.length; z++) {
            var listContainer = document.createElement("li");
            var newGalleryImage = document.createElement("img");
            $(newGalleryImage).attr({
                src: imagePath + imageMaster[z],
                class: 'gallery',
                id: z
            });
            //adds an eventlistener to each image which will turn on the lightbox
            $(newGalleryImage).on("click", lightBoxOpen);
            $(galleryHolder).append(listContainer);
            $(listContainer).append(newGalleryImage);
        }
    }

    //when called this function will take the selected image and post it up
    //in the lightbox
    function lightBoxOpen(event) {
        var lightBoxid = document.getElementById('image_show');
        var clickedImage = event.target;
        $(lightBoxid.firstChild).attr('src', $(clickedImage).attr('src'));
        $(lightBoxid).attr('class', 'display_img');
    }

    //when called this function will turn off the lightbox
    function lightBoxClose(event) {
        var clickedItem = event.target;
        if (clickedItem.id === 'image_show') {
            var lightBoxid = document.getElementById('image_show');
            $(lightBoxid).attr('class', 'display_none');
        }
    }

});
