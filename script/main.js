var initTests = new AllTests();
initTests.createAllTests();

var filterBtn = document.getElementById("filter__btn");
filterBtn.onclick = function() {
  console.log("filtering");
  initTests.filterTest();
};
