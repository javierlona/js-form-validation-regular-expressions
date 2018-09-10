// Form Blur Event Listeners
document.querySelector("name").addEventListener("blur", validate_name);
document.querySelector("zipcode").addEventListener("blur", validate_zipcode);
document.querySelector("email").addEventListener("blur", validate_email);
document.querySelector("phone").addEventListener("blur", validate_phone);

function validate_name() {
  // Select the field
  const name = document.querySelector("name");
  // Create regular expression
  let regularExp = /^[a-zA-Z -.]{2,30}$/;

  if(!regularExp.test(name.value)){
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }

}

