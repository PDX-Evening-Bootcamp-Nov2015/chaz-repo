//windows onload function
//loads functions upon opening webpage
//adds event listener to the submit button
window.onload = function() {
  document.getElementById("submit").addEventListener("click", checkForm, false);
};

// attempted to refactor this but had issues modifying the characteristics of
//a child without changing the parent
//the following lines create 4 new elements under the form with prepopulated
//error messages for form verification. They are set to display none as default
    var signupID = document.getElementById("signup");
    var error1; var error2; var error3; var error4;
    var errorDisplayList = [error1, error2, error3, error4];
    var errorList = ["You must fill out your name<br>", "You must fill out your username<br>", "You must fill out your e-maill<br>", "Please ensure that your e-mail address is in the following format, example@example.com"]
    for (i = 0; i < errorList.length; i++){
      errorDisplayList[i] = document.createElement("p");
      signupID.appendChild(errorDisplayList[i]);
      errorDisplayList[i].setAttribute('class', 'error');
      errorDisplayList[i].style.display = 'none';
      errorDisplayList[i].innerHTML = errorList[i]
    }

//function takes in the values of the form and ensures they meet the requirements
//if something fails verification the corresponding error message is set to
//display inline from the default of none
// once all forms have been validated, the form is submitted and the
//username is stored in session storage
function checkForm(event){
//the following four lines reset the values of the error messages to display none
//each time the checkForm function is called in order to prevent error messages
//from being displayed once the error has been fixed
  errorDisplayList[0].style.display = 'none';
  errorDisplayList[1].style.display = 'none';
  errorDisplayList[2].style.display = 'none';
  errorDisplayList[3].style.display = 'none';
  var xname = document.forms["signup"]["name"].value;
  var xusername = document.forms["signup"]["username"].value;
  var xemail = document.forms["signup"]["email"].value;
  document.getElementById("signup").noValidate = true;
  if (xname === null || xname ===""){
    event.preventDefault();
    errorDisplayList[0].style.display = 'inline';
  }else if (xusername === null || xusername ===""){
    event.preventDefault();
    errorDisplayList[1].style.display = 'inline';
  }else if (xemail === null || xemail ===""){
    errorDisplayList[2].style.display = 'inline';
    event.preventDefault();
  }else if (testEmail(xemail) === false){
    errorDisplayList[3].style.display = 'inline';
    event.preventDefault();
  } else {
event.preventDefault();
sessionStorage.setItem('username', xusername);
redirect();
  }
}

//regex that is called by the checkform function to check proper email format
function testEmail(xemail){
  var regemail = /\S+@\S+\.\S+/;
  return regemail.test(xemail);
}

//function called after checkform function is complete to redirect to gallery
function redirect(){
    window.location.href = "gallery.html";
}
