/*
Exam One - Batch 364
Total 60 (40 + 20) Marks
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine studentss

*/
const ul = document.querySelector("#student-list");
const nothing = document.querySelector('#nothing-details');



function showPage(){
    data.forEach(function(param){
        const img = param.picture.large;
        const li = document.createElement('li');
        li.classList.add("student-item");
        li.innerHTML = `
        <div class="student-details">
            <img class="avatar" src="${img}" alt="Profile Picture">
            <h3>${param.name.title} ${param.name.first} ${param.name.last}</h3>
            <span class="email">${param.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${param.registered.date}</span>
          </div>
        `
        ul.appendChild(li);
    })
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const getContent =  function(start, end){
    const totalCount = data.length;
    const perPageCount = 9;
    const paginationList = document.querySelector('.link-list');

    const paginationNum = Math.round(totalCount / perPageCount);
    for (let index = 0; index < paginationNum; index++) {
        const btn = document.createElement('button');
        btn.innerText = index + 1;
        const li = document.createElement('li');
        li.appendChild(btn);
        paginationList.appendChild(li);
    }
};
getContent(0, 9);






/*
(Bonus Task)
Create the `searchPage` function
This function will search and display results from all students
Only the filtered result will be displayed in the view
*/
const searchBtn = document.querySelector('#searchPage');

function searchPage() {
    //search then make input field blank
    const searchID = document.querySelector("#search");
    const searchText = searchID.value;
    searchID.value = '';
  
    //if no results found
    if (searchText === '') {
        const h1 = document.createElement("h1");
        h1.classList.add("student-item");
        h1.innerText = 'Nothing Found';
        nothing.appendChild(h1);
    } else {
      nothing.textContent='';
      let result = data.filter(datas => datas.name.first == searchText);
      console.log(result);
     
  }
  };



// // Call functions
showPage();