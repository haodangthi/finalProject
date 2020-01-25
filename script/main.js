

var initTests = new AllTests();
initTests.createAllTests();
initTests.showAllTests(initTests.filteredTests,0,6);


if (JSON.parse(localStorage.getItem("AllUsers"))!=null){
  initTests.allUsers=JSON.parse(localStorage.getItem("AllUsers"));
}
var filterBtn = document.getElementById("filter__btn");
filterBtn.onclick = function() {
  console.log("filtering");
  initTests.filterTest();
};
