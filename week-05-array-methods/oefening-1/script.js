const scores = [12, 67, 45, 89, 23, 55, 71, 38, 94, 16];

const filter = document.querySelector("#result-filtered")
const map = document.querySelector("#result-map")
const sorted = document.querySelector("#result-sorted")

// Filter: toon alleen scores boven de 50 in #result-filtered
// Map: verdubbel alle scores en toon in #result-map
// Sort: sorteer van laag naar hoog en toon in #result-sorted
const boven = scores.filter(score => score > 50)
const verdubbeld = scores.map(n => n * 2);
const sort = scores.sort((a, b) => a - b);

for (let score of boven){
    filter.innerHTML += `<li> ${score} </li>`
};

for (let score of verdubbeld){
    map.innerHTML += `<li> ${score} </li>` 
};

for (let score of sort){
    sorted.innerHTML += `<li> ${score} </li>`
}