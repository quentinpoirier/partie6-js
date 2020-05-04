let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

myButton.addEventListener('click', function () {
    days.forEach((day, index) => {
        let myDiv = document.createElement('div');
        myDiv.innerText = day;
        myDays.appendChild(myDiv);
        if (index > 4) {
            myDiv.style.fontWeight = 'bold';
        }
    })
})