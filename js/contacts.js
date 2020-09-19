function fullNameValidation() {
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const name = document.getElementById("fullName").value;
  const errorName = document.getElementById("errorName");
  const fullNameIsValid = regName.test(name);

  if (fullNameIsValid) {
    errorName.style.display = "none";
  } else {
    errorName.style.display = "block";
  }
  return fullNameIsValid;
}

function emailValidation() {
  const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(?:[a-zA-Z]{2,})$/;
  const errorEmail = document.getElementById("errorEmail");
  const email = document.getElementById("email").value;
  const emailIsValid = regEmail.test(email);

  if (emailIsValid) {
    errorEmail.style.display = "none";
  } else {
    errorEmail.style.display = "block";
  }
  return emailIsValid;
}

function phoneValidation() {
  const regPhoneNumber = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
  const errorPhone = document.getElementById("errorPhone");
  const phoneNumber = document.getElementById("phoneNumber").value;
  const phoneNumberIsValid = regPhoneNumber.test(phoneNumber);
  if (phoneNumberIsValid) {
    errorPhone.style.display = "none";
  } else {
    errorPhone.style.display = "block";
  }
  return phoneNumberIsValid;
}

function messageValidation() {
  const messageText = document.getElementById("messageText").value;
  const errorTextMessage = document.getElementById("errorTextField");
  const messageIsValid = messageText.length > 10;

  if (messageIsValid) {
    errorTextMessage.style.display = "none";
  } else {
    errorTextMessage.style.display = "block";
  }
  return messageIsValid;
}

function fullFormValidation() {
  const fullNameIsValid = fullNameValidation();
  const emailIsValid = emailValidation();
  const phoneIsValid = phoneValidation();
  const messageIsValid = messageValidation();
  const formSubmissionMessage = document.getElementById("formSubmissionStatus");

  if (fullNameIsValid && emailIsValid && phoneIsValid && messageIsValid) {
    formSubmissionMessage.innerHTML = "Form Submited Sucessfully";
  } else {
    formSubmissionMessage.innerHTML =
      "There was a problem with your form, please try again";
  }
}
