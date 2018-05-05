

checkButton()

// regex form

document.forms.test.firstName.addEventListener("blur", validateFirstName);
document.forms.test.lastName.addEventListener("blur", validateLastName);
document.forms.test.email.addEventListener("blur", validateEmail);
document.forms.test.phone.addEventListener("blur", validatePhone);
document.forms.test.address.addEventListener("blur", validateAddress);
document.forms.test.post.addEventListener("keyup", validatePost);


var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validPhone = false;
var validAddress = false;
var validPost = false;

// Firstname
function validateFirstName() {
    //console.log("Validating name");
    var firstName = document.forms.test.firstName.value;
    var firstNameErrorElement = document.getElementById('firstName');
    if (firstName == "") {
        firstNameErrorElement.style.border="2px solid #8a3636";
        validFirstName = false;
    } else {
        firstNameErrorElement.style.border="none";
        firstNameErrorElement.innerHTML = "";
        validFirstName = true;
    }
    checkButton();
}

// Lastname

function validateLastName() {
    //console.log("Validating name");
    var lastName = document.forms.test.lastName.value;
    var lastNameErrorElement = document.getElementById('lastName');
    if (lastName == "") {
        lastNameErrorElement.style.border="2px solid #8a3636";
        validLastName = false;
    } else {
        lastNameErrorElement.style.border="none";
        lastNameErrorElement.innerHTML = "";
        validLastName = true;
    }
    checkButton();
}

// Email


function validateEmail() {
    //console.log("Validating email");
    var email = document.forms.test.email.value;
    var emailErrorElement = document.getElementById('email');
    var emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,25}$/i;
    if (!emailpattern.test(email)) {
        emailErrorElement.style.border="2px solid #8a3636";
        validEmail = false;
    } else {
        emailErrorElement.style.border="none";
        emailErrorElement.innerHTML = "";
        validEmail = true;
    }
    checkButton();
}

// Phone

function validatePhone() {
    //console.log("Validating phone");
    var phone = document.forms.test.phone.value;
    var phoneErrorElement = document.getElementById('phone');
    phonenumber = phone.replace(/ /g,''); // Fjern alle spaces
    phonepattern = /^\d{8}$/;
    if (!phonepattern.test(phonenumber)) {
        phoneErrorElement.style.border="2px solid #8a3636";
        validPhone = false;
    } else {
        phoneErrorElement.style.border="none";
        phoneErrorElement.innerHTML = "";
        validPhone = true;
    }
    checkButton();
}

// Address

function validateAddress() {
    //console.log("Validating name");
    var address = document.forms.test.address.value;
    var addressErrorElement = document.getElementById('address');
    if (address == "") {
        addressErrorElement.style.border="2px solid #8a3636";
        validAddress = false;
    } else {
        addressErrorElement.style.border="none";
        addressErrorElement.innerHTML = "";
        validAddress = true;
    }
    checkButton();
}

// Postal

function validatePost() {
    //console.log("Validating phone");
    var post = document.forms.test.post.value;
    var postErrorElement = document.getElementById('post');
    postnumber = post.replace(/ /g,''); // Fjern alle spaces
    postpattern = /^\d{4}$/;
    if (!postpattern.test(postnumber)) {
        postErrorElement.style.border="2px solid #8a3636";
        validPost = false;
    } else {
        postErrorElement.style.border="none";
        postErrorElement.innerHTML = "";
        validPost = true;
    }
    checkButton();
}




function validateForm() {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePhone();
    validateAddress();
    validatePost();
    return validFirstName && validLastName && validEmail && validPhone && validAddress && validPost;
}

function checkButton () {
    //console.log("checkbutton triggered")
    var btn = document.querySelector ("input[type='submit']");
    if (validFirstName && validLastName && validEmail && validPhone && validAddress && validPost)
    {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

