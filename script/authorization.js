let loggedOut = getElem(".loggedOut");
let loggedIn = getElem(".logged__in");
let loginForm = getElem("#log__in");
let signUpForm = getElem("#sign__up");

let signUpBtn = getElem(".sign_up");
let signUp = getElem(".submit__username");
let logIn = getElem(".submit__login");
let logOut = document.getElementsByClassName("profile__menu__item")[1];
let close = Array.from(document.getElementsByClassName("close"));
let logInBtn = Array.from(document.getElementsByClassName("actionBtn"));


hide(loginForm);
hide(signUpForm);

if (localStorage.getItem("currentUser") == null) {
  show(loggedOut);
  hide(loggedIn);
} else {
  hide(loggedOut);
  show(loggedIn);
}


//SIGN UP BUTTON to open a Form
signUpBtn.onclick = function() {
  show(signUpForm);
};
//SIGN UP BUTTON ON FORM

signUp.onclick = function() {
  let createLogInput = getElem('input[name="create__uname"]')
    .value;

  let createLogPass = getElem('input[name="password"]').value;
  console.log(createLogPass, createLogInput);

  if (usernameExists(initTests.allUsers, createLogInput)) {
    alert("This username alredy exists");
  } else {
    let user = new User();
    if (checkSignUpForm(createLogInput, createLogPass)) {
      user.singUp(createLogInput, createLogPass, initTests);

      initTests.allUsers.push(user);
      
      setToStorage("AllUsers", initTests.allUsers);
      hide(signUpForm);
    }
    return user;
  }
};
//LOGIN BTN ON FORM

logIn.onclick = function() {
  let logInput = getElem('input[name="uname"]').value;
  let logPass = getElem('input[name="psw"]').value;
  let user = findUser(initTests.allUsers, logInput);
  if (user.password == logPass) {
    initTests.currentUser = user;
    user.isLoggedIn = true;
    setToStorage("currentUser",initTests.currentUser);
   
    hide(loggedOut);
    show(loggedIn);
    profileName();
    hide(menu);
    hide(loginForm);
  }
};



logOut.onclick = function() {
  if (initTests.currentUser) {
    initTests.currentUser.isLoggedIn = false;
    initTests.currentUser = null;
    localStorage.removeItem("currentUser");
    console.log("Logged out");
    show(loggedOut);
    hide(loggedIn);
  }
};

// close btns on Modals

close.forEach(element => {
  element.onclick = function() {
    hide(element.parentElement.parentElement);
  };
});

//LOGIN BTN to OPEN a form

logInBtn.forEach(e => {
  e.onclick = function() {
    show(loginForm);
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
function usernameExists(array, username) {
  let found;
  array.forEach(e => {
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



