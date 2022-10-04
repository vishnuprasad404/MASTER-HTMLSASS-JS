const submitBtn = document.querySelector(".submit-btn");
const usernameError = document.querySelector(".username-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

//submit form
function submitForm() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");


  validateUsername(username);
  validateEmail(email);
  validatePassword(password)
}

// validate username
function validateUsername(username) {
  if (username.value === "") {
    usernameError.innerHTML = "username is required!";
    return;
  } else {
    usernameError.innerHTML = "";
  }
  if (username.value.length < 3) {
    usernameError.innerHTML = "username must be atleast 3 characters!";
    return;
  }
}

// validate email address
function validateEmail(email) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value === "") {
    return (emailError.innerHTML = "Email is required!");
  }

  if (email.value.match(mailFormat)) {
    return (emailError.innerHTML = "");
  } else {
    return (emailError.innerHTML = "enter a valid email address!");
  }
}

// validate password field

function validatePassword(password) {
  const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (password.value === "") {
    return (passwordError.innerHTML = "password is required!");
  }
  if (password.value.match(passwordFormat)) {
    return (passwordError.innerHTML = "");
  } else {
    return (passwordError.innerHTML = "enter a valid pass address!");
  }
}
