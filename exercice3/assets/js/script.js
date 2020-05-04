let languages = ['html', ' css', ' javascript', ' php', ' mysql', ' c++', ' ruby', ' python'];

myButton.onclick = myFunction;

function myFunction() {
  languages.forEach(element => {
    let myDiv = document.createElement('div');
    myDiv.innerText = element;
    myTable.appendChild(myDiv);
  });



}

// myButton.addEventListener('click', function () {
//   for (let element of languages); {
//     console.log(element);
//   let myDiv = document.createElement('div');
//   myDiv.innerText = element;
//   myTable.appendChild(myDiv);
//   }
// })