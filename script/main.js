var initTests = new AllTests();
initTests.createAllTests();
initTests.showAllTests(initTests.filteredTests,0,6);

var filterBtn = document.getElementById("filter__btn");
filterBtn.onclick = function() {
  console.log("filtering");
  initTests.filterTest();
};
