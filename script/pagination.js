
let rightArrow = document.querySelector("#r_pag");
let leftArrow = document.querySelector("#l_pag");
let currentPage = 0;
let pagination = document.querySelector(".pagination");

let pageQuantity=countPages();

let paginationItems=[];
for (let i = 0; i < pageQuantity; i++) {
    let page=createPagination(i+1);
    paginationItems.push(page);
}


rightArrow.onclick = function() {
  if(currentPage+1==pageQuantity){
      return true;
  } else{
      currentPage++;
  }
  initTests.showAllTests(initTests.filteredTests, currentPage, 6);
  console.log("Cur page", currentPage);
};

leftArrow.onclick = function() {
  if (currentPage - 1 < 0) {
    return true;
  } else {
    currentPage--;
  }

  initTests.showAllTests(initTests.filteredTests, currentPage, 6);
  console.log("Cur page", currentPage);
};

for (let i = 0; i < paginationItems.length; i++) {
  paginationItems[i].onclick = function() {
    console.log("change page");
    currentPage = paginationItems.indexOf(paginationItems[i]);
    initTests.showAllTests(
      initTests.filteredTests,
      paginationItems.indexOf(paginationItems[i]),
      6
    );
  };
}



function createPagination(a) {
  let paginationItem = document.createElement("div");
  paginationItem.classList.add("pagination__item");
  let pageNumber = document.createTextNode(`${a}`);
  paginationItem.appendChild(pageNumber);
  pagination.insertBefore(paginationItem, rightArrow);
  return paginationItem;
}


function countPages(){
    let pageQuantity;
    if (initTests.filteredTests.length%6==0){
        pageQuantity= initTests.filteredTests.length/6;
    } else {
        pageQuantity= Math.floor(initTests.filteredTests.length/6)+1;
    }
    return pageQuantity;
}