let welcomeName=getElem(".username");
profileName();
let menu = getElem(".profile__menu");
hide(menu);
let profileBtn = getElem(".dropdown__btn").children[0];
profileBtn.onclick = function() {
  if (menu.style.display == "none") {
    console.log("clicked");
    show(menu)
  } else {
    hide(menu);
  }
};

function profileName(){
    if (localStorage.getItem("currentUser")!=null){
      welcomeName.innerHTML="";
      let user=getStorage("currentUser");
      console.log(user);
      let welcomeNameText=document.createTextNode(`Welcome, ${user.username}`);
      welcomeName.appendChild(welcomeNameText);
    }
    
  }

  
