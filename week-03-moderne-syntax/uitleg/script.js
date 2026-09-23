let getName = document.getElementById("showName")

// function showName(name){
//     return "mijn naam is: " + name
// }

const showName = (name) => {
    return `mijn naam is: ${name} `
}

getName.textContent = showName("Jayden")

let fruits = ["Appel", "Banaan", "Perzik"]

// for(let e = 0;1 < fruits.length; i++){
//     console.log(fruits[])
// }

for(let fruit of fruits){
    getName.innerHTML += fruit + "<br>";
}

let title = document.getElementById("title");
let button = document.getElementById("btn");
let section = document.getElementById("section");

button.addEventListener('click', () => {
    title.textContent = "ik heb geklikt"

    title.classList.toggle('active')

    const p = document.createElement('p');

    p.textContent = 'ik voeg een paragraaf toe'

    section.appendChild()
})