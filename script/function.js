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