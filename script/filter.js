function filterIsChecked(filter) {
  let filter1 = filter.filter(checkbox => checkbox.checked);

  if (filter1[0] == null) {
    console.log("filter1", filter1);
    return false;
  } else {
    console.log("filter1", filter1);
    return filter1;
  }
}
function allCheckBoxesTrue(filter) {
  if (filterIsChecked(filter)) {
    console.log("filter---", filter);
    return filterIsChecked(filter);
  } else {
    return filter.map(checkbox => {
      checkbox.checked = true;
      return checkbox;
    });
  }
}

function filter(arrayOfTest) {
  let levelFilters = Array.from(
    document
      .querySelector(".level__filters")
      .querySelectorAll("[type=checkbox]")
  );
  let subjectFilters = Array.from(
    document
      .querySelector(".subject__filters")
      .querySelectorAll("[type=checkbox]")
  );
  let timeFilters = Array.from(
    document.querySelector(".time__filters").querySelectorAll("[type=checkbox]")
  );

  levelFilters = allCheckBoxesTrue(levelFilters);
  subjectFilters = allCheckBoxesTrue(subjectFilters);
  timeFilters = allCheckBoxesTrue(timeFilters);

  console.log(levelFilters, subjectFilters, timeFilters);

  let showTest = [];
  let subjTest = [];
  let timeTest = [];

  for (let i = 0; i < levelFilters.length; i++) {
    //  test =tests.filter((t)=>t,testLevel==levelFilters[i].id);
    for (var j = 0; j < arrayOfTest.length; j++) {
      if (arrayOfTest[j].testLevel == levelFilters[i].id) {
        showTest.push(arrayOfTest[j]);
      }
    }
  }

  console.log(showTest);

  for (let i = 0; i < subjectFilters.length; i++) {
    for (let j = 0; j < showTest.length; j++) {
      console.log("subject filter id", subjectFilters[i].id);
      if (showTest[j].testSubject == subjectFilters[i].id) {
        subjTest.push(showTest[j]);
      }
    }
  }

  console.log(subjTest);
  for (let i = 0; i < timeFilters.length; i++) {
    for (let j = 0; j < subjTest.length; j++) {
      if (subjTest[j].time == +timeFilters[i].id) {
        timeTest.push(subjTest[j]);
      }
    }
  }
  console.log(timeTest);

  return timeTest;
}
