let input = document.querySelector("#findTest");

input.onkeyup = function() {
  let inValue = input.value.toUpperCase();
  let shownTests = initTests.createdTests;
  console.log(shownTests.length);
  let search=[];
  for (var i = 0; i < shownTests.length; i++) {
    if (
      shownTests[i].testName.toUpperCase().indexOf(inValue.toUpperCase()) > -1
    ) {
      console.log(shownTests[i].testName.toUpperCase());
      
      search.push(shownTests[i]);
    } else {
      
      shownTests[i].html.style.display = "none";
    }
    console.log(search);
    initTests.filteredTests=search;
    initTests.showAllTests(search,0,6);
  }

  if (inValue == null) {
    initTests.filterTest();
  }
};
