// Voeg een event listener toe aan elke knop
// Knop 1: voeg tekst toe aan #message
// Knop 2: voeg een <li> toe aan #list met een tekst
// Knop 3: wissel de klasse 'active' op #message

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");

btn1.addEventListener('click', () => {
    message.textContent = "ik heb geklikt"

})

btn2.addEventListener('click', () => {

    const li = document.createElement('li');

    li.textContent = "ello"

    list.appendChild(li)
})

btn3.addEventListener('click', () => {
    message.classList.toggle('active')

})