const origineel = document.getElementById("origineel")
const kopie = document.getElementById("kopie")

const people = [
  { name: 'Lisa', age: 28, city: 'Amsterdam' },
  { name: 'Mark', age: 34, city: 'Rotterdam' },
  { name: 'Sara', age: 22, city: 'Utrecht' },
];


// 1. Toon in #origineel de originele lijst met alleen namen en steden.
//    Gebruik destructuring in je .map().
// 2. Maak met .map() en de spread operator een nieuwe array waarin
//    de stad van elke persoon is gewijzigd naar 'Den Haag'.
//    De originele people-array moet onveranderd blijven.
// 3. Toon deze nieuwe lijst in #kopie, ook met destructuring.

const { name, city } = people;

for (const person of people){
 const { name, city } = person;
 origineel.innerHTML +=`
 <h2>${name}</h2>
 <h3>${city}</h3>
 `
}

//map door de array people
// voor elk person verander je de city naar den haag
//Loop door de people array, elk object heet tijdelijk person
// ...person betekent dat hij name en age laat staat en dat city veranderd
//naar den haag
const names = people.map((person) => ({...person, city: "Den Haag"}));




for (const person of names){
 const { name, city } = person;
 kopie.innerHTML +=`
 <h2>${name}</h2>
 <h3>${city}</h3>
 `
}