$(document).ready(function(){
//errorTracker object keeps track of form whether form submissions are valid or not
var errorTracker = {
    name: 0,
    username: 0,
    email:0
  };

//disables standard form validation
$("#signup").disableValidation = true;
$("#submit").click(function (event) {
  event.preventDefault();
//assigns variable to html placeholder values
  var name = $("[placeholder='name']").val();
  var username = $("[placeholder='username']").val();
  var email = $("[placeholder='youremail@place.com']").val();
    if ($.trim(name) === "") {
//error message DIV is removed in order to prevent multiple error messages from being inserted
      $("#namemessage").remove();
//an error message DIV is inserted into the DOM if form requirements are not met
      $("<div id='namemessage'>Please enter your name</div>").insertAfter("[placeholder='name']");
      $("#namemessage").css( "color", "red" );
//if all form requirements are met, the errorTracker.name1 value is changed from 0 to 1
      errorTracker.name1 = 0;
}   else if ($.trim(name) != ""){
//if form requirements are met, the error message is removed
      $("#namemessage").remove();
      errorTracker.name1 = 1;
}
    if ($.trim(username) === "") {
      $("#usernamemessage").remove();
      $("<div id='usernamemessage'>Please enter your username</div>").insertAfter("[placeholder='username']");
      $("#usernamemessage").css( "color", "red" );
      errorTracker.username1 = 0;
}   else if ($.trim(username) != ""){
      $("#usernamemessage").remove();
      errorTracker.username1 = 1;
}
    if ($.trim(email) === "" || testEmail(email) === false ) {
      $( "#emailmessage" ).remove();
      $("<div id='emailmessage'>Please enter your email</div>").insertAfter("[placeholder='youremail@place.com']");
      $("#emailmessage").css( "color", "red" );
      errorTracker.email1 = 0;
}   else if (testEmail(email) === true){
      $("#emailmessage").remove();
      errorTracker.email1 = 1;
}
//if all three form inputs are valid the username is stored in session storage and the user
//is directed to the gallery page
    if (errorTracker.name1 === 1 && errorTracker.username1 === 1 && errorTracker.email1 === 1){
      sessionStorage.setItem('username', username);
      document.location.href = 'gallery.html';
}
//basic REGEX to test validity of email address X@X.X
function testEmail(email){
  var regemail = /\S+@\S+\.\S+/;
  return regemail.test(email);
}
  });
});
