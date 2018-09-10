// Create the const input field variables
const NAME = document.querySelector("#name");
const ZIPCODE = document.querySelector("#zipcode");
const EMAIL = document.querySelector("#email");
const PHONE = document.querySelector("#phone");

// Form Blur Event Listeners
NAME.addEventListener("blur", validate_name);
ZIPCODE.addEventListener("blur", validate_zipcode);
EMAIL.addEventListener("blur", validate_email);
PHONE.addEventListener("blur", validate_phone);

function validate_name() {
  // Create regular expression
  let regularExp = /^[a-zA-Z -.]{3,30}$/;
  // Verify via regular expression
  if(!regularExp.test(NAME.value)){
    // Add the class to
    NAME.classList.add("is-invalid");
  } else {
    NAME.classList.remove("is-invalid");
  }

}

function validate_zipcode() {
  // Create regular expression
  let regularExp = /^[0-9]{5}(-[0-9]{4})?$/;
  // Verify via regular expression
  if(!regularExp.test(ZIPCODE.value)){
    // Add the class to
    ZIPCODE.classList.add("is-invalid");
  } else {
    ZIPCODE.classList.remove("is-invalid");
  }

}

function validate_email() {
  // Create regular expression
  let regularExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,7})$/;
  // Verify via regular expression
  if(!regularExp.test(EMAIL.value)){
    // Add the class to
    EMAIL.classList.add("is-invalid");
  } else {
    EMAIL.classList.remove("is-invalid");
  }

}

function validate_phone() {
  // Create regular expression
  let regularExp = /^(\d{3})-(\d{3})-(\d{4})$/;
  // Verify via regular expression
  if(!regularExp.test(PHONE.value)){
    // Add the class to
    PHONE.classList.add("is-invalid");
  } else {
    PHONE.classList.remove("is-invalid");
  }

}