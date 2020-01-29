let welcomeName=getElem(".username");
profileName();
let menu = getElem(".profile__menu");
menu.classList.add("display__none");
let profileBtn = getElem(".dropdown__btn").children[0];
profileBtn.onclick = function() {
  if (menu.classList.contains("display__none")) {
    console.log("clicked");
    menu.classList.remove("display__none");
  } else {
    menu.classList.add("display__none");
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

  
