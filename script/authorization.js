let loggedOut = document.querySelector(".loggedOut");
let loggedIn = document.querySelector(".logged__in");

if (localStorage.getItem("currentUser") == null) {
  loggedOut.style.display = "";
  loggedIn.style.display = "none";
} else {
  loggedOut.style.display = "none";
  loggedIn.style.display = "";
}

var loginForm = document.querySelector("#log__in");
loginForm.style.display = "none";
var signUpForm = document.querySelector("#sign__up");
signUpForm.style.display = "none";
let menu = document.querySelector(".profile__menu");
menu.style.display = "none";

//LOG OUT BTN
let logOut = document.getElementsByClassName("profile__menu__item")[1];
logOut.onclick = function() {
  if (initTests.currentUser) {
    initTests.currentUser.isLoggedIn = false;
    initTests.currentUser = null;
    localStorage.removeItem("currentUser");
    console.log("Logged out");
    loggedOut.style.display = "";
    loggedIn.style.display = "none";
  }
};

let profileBtn = document.querySelector(".dropdown__btn").children[0];
profileBtn.onclick = function() {
  if (menu.style.display == "none") {
    console.log("clicked");
    menu.style.display = "";
  } else {
    menu.style.display = "none";
  }
};

//SIGN UP BUTTON to open a Form
var signUpBtn = document.querySelector(".sign_up");
signUpBtn.onclick = function() {
  signUpForm.style.display = "";
};
//SIGN UP BUTTON ON FORM
let signUp = document.querySelector(".submit__username");
signUp.onclick = function() {
  let createLogInput = document.querySelector('input[name="create__uname"]')
    .value;

  let createLogPass = document.querySelector('input[name="password"]').value;
  console.log(createLogPass, createLogInput);

  if (usernameExists(createLogInput)) {
    alert("This username alredy exists");
  } else {
    let user = new User();
    if (checkSignUpForm(createLogInput, createLogPass)) {
      user.singUp(createLogInput, createLogPass, initTests);

      initTests.allUsers.push(user);
      localStorage.setItem("AllUsers", JSON.stringify(initTests.allUsers));
    }
    return user;
  }
};
//LOGIN BTN ON FORM
let logIn = document.querySelector(".submit__login");
logIn.onclick = function() {
  let logInput = document.querySelector('input[name="uname"]').value;
  let logPass = document.querySelector('input[name="psw"]').value;
  let user = findUser(initTests.allUsers, logInput);
  if (user.password == logPass) {
    initTests.currentUser = user;
    user.isLoggedIn = true;
    localStorage.setItem("currentUser", JSON.stringify(initTests.currentUser));
    loggedOut.style.display = "none";
    loggedIn.style.display = "";
    menu.style.display = "none";
  }
};

// close btns on Modals
var close = Array.from(document.getElementsByClassName("close"));
close.forEach(element => {
  element.onclick = function() {
    element.parentElement.parentElement.style.display = "none";
  };
});

//LOGIN BTN to OPEN a form
var logInBtn = Array.from(document.getElementsByClassName("actionBtn"));
logInBtn.forEach(e => {
  e.onclick = function() {
    loginForm.style.display = "";
  };
});

//Checks login and password
function checkSignUpForm(login, password) {
  let regExp = /\s+/g;

  if (
    login
      .trim()
      .split(regExp)
      .join("").length === login.length
  ) {
    if (
      password
        .trim()
        .split(regExp)
        .join("").length === password.length
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//checks whether username is valid or not
function usernameExists(username) {
  let found;
  initTests.allUsers.forEach(e => {
    if (e.username === username) {
      found = true;
    }
  });
  return found;
}

function findUser(array, username) {
  let user;
  array.forEach(e => {
    if (e.username == username) {
      user = e;
    }
  });
  return user;
}
