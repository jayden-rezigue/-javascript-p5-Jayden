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