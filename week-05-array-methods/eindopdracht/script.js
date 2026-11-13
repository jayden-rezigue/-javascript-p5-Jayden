let zoek = document.getElementById('search-bar')
const low = document.getElementById("sort-low")
const high = document.getElementById("sort-high")

let count = document.getElementById('counter')
let productContent = document.getElementById('products')
let filtered = document.getElementById('filters')

const products = [
  'Laptop Pro',
  'Draadloze muis',
  'USB-C hub',
  'Bureaulamp',
  'Notitieboek',
  'Pennenset',
  'Koptelefoon',
  'Bluetooth speaker',
  'Webcam HD',
  'Muismat XL',
  'Monitor 27"',
  'Desk organizer',
];

let searchTerm = '';
let sorting = '';

const showProducts = (list) => {

  productContent.innerHTML = ''

  for(let product of list){
    productContent.innerHTML += `
    <article>
    <h2>${product}</h2>
    </article`
  }
  // Toon elke productnaam als een <article> in #products
  // Laat in #counter de hoeveelheid producten zien
};

const filterProducts = () => {
  let filtered = products.filter(product => product.toLowerCase().includes(searchTerm))

  if (sorting === "az"){
    filtered.sort()
  } else if (sorting == "za"){
    filtered.sort().reverse()
  }
// als sortering gelijk is aan az
//gebruik op de filtered variabel de sort functie
//else if sortinger gelijk is aan za
//gebruik op de filtered ariabel de sort en reverse functie

  showProducts(filtered);
};
zoek.addEventListener('change' , () =>{
  searchTerm = zoek.value
  filterProducts()
  //maak een variabel aan die de waarde van je input opslaat
  //roep filterProducts aan en geef de variabel mee met de functie

})
// Maak een eventlistener voor de #search-bar input
// Sla de waarde op in de searchTerm variabele en roep filterProducts() aan
low.addEventListener('click' , () =>{
sorting = "az"  
filterProducts()
})
// Maak een eventlistener voor de #sort-az button
// Zet sorting op 'az' en roep filterProducts() aan
high.addEventListener('click' , () =>{
sorting = "za"  
filterProducts()
})
// Maak een eventlistener voor de #sort-za button
// Zet sorting op 'za' en roep filterProducts() aan

filterProducts({
  
});

