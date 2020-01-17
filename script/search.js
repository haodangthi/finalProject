let input = document.querySelector("#findTest");

input.onkeyup = function() {
  let inValue = input.value.toUpperCase();
  let shownTests = initTests.filteredTests;
  //console.log(initTests.filteredTests);
  for (var i = 0; i < tests.length; i++) {
    if (
      shownTests[i].testName.toUpperCase().indexOf(inValue.toUpperCase()) > -1
    ) {
      shownTests[i].html.style.display = "";
    } else {
      console.log(shownTests[i]);
      shownTests[i].html.style.display = "none";
    }
  }

  if (inValue == null) {
    initTests.filterTest();
  }
};
