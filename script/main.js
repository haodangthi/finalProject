

var initTests = new AllTests();
initTests.createAllTests();
initTests.showAllTests(initTests.filteredTests,0,6);
if (getStorage("AllUsers")!=null){
  initTests.allUsers=getStorage("AllUsers");
}

var filterBtn = document.getElementById("filter__btn");
filterBtn.onclick = function() {
  console.log("filtering");
  initTests.filterTest();
};


// let myTestsBtn=getElem(".myTests__btn");
// myTestsBtn.onclick=function(){
//   setToStorage("showMyTests",true);
// }
