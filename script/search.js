let input = getElem("#findTest");
console.log(input);

input.onkeyup = function() {
  let inValue = input.value.toUpperCase();
  let shownTests = initTests.createdTests;

  let search = [];
  for (var i = 0; i < shownTests.length; i++) {
    if (
      shownTests[i].testName.toUpperCase().indexOf(inValue.toUpperCase()) > -1
    ) {
      console.log(shownTests[i].testName.toUpperCase());

      search.push(shownTests[i]);
    } else {
      hide(shownTests[i].html);

      initTests.filteredTests = search;
      initTests.showAllTests(initTests.filteredTests, 0, 6);
    }
  }
};
