let burger=getElem(".burger__menu").children[0];
let closeBurger = getElem(".burger__menu2").children[0];
let burgerMenu=getElem(".burger__menu");
let navList=getElem(".nav__list");
let nav=getElem("nav");
closeBurger.classList.add("hide");
burger.onclick=function(){
  console.log("click");
  if(navList.classList.contains("hide")){
    navList.classList.remove("hide");
    
  }
 
}
closeBurger.onclick=function(){
  navList.classList.add("hide");
}

function getStorage(key){
    return JSON.parse(localStorage.getItem(key));
  }
  function setToStorage(key,value){
    localStorage.setItem(key, JSON.stringify(value));
  }


  function getElem(selector){
    return document.querySelector(selector);
}

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "";
}

function createElem(tag,className,text,parent){
  let elem= document.createElement(tag);
  elem.classList.add(className);
  let textNode = document.createTextNode(text);
  elem.appendChild(textNode);
  parent.appendChild(elem);
  return elem;
}