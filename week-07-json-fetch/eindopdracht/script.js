const all = document.getElementById('filter-alle')
const stad = document.getElementById('filter-stad')
const technologie = document.getElementById('filter-technologie')
const media = document.getElementById('filter-media')

let artikel = document.getElementById('articles')
let allArticles = [];

const showArticles = (articles) => {
  artikel.innerHTML = '';
  for(let article of articles){
    artikel.innerHTML += `
    <article>
    <span>${article.category}</span>
    <h2>${article.title}</h2>
    <p>${article.summary}</p>
    </article>`
  }
  
  // Zet elk artikel om naar een <article> met map() en toon het in #articles
  // Toon de title, category en summary van elk artikel
};

fetch('./news.json')
  .then(r => r.json())
  .then(articles => {
    allArticles = articles
    showArticles(allArticles)
    console.log(articles)
    // Sla de artikelen op in allArticles
    // Roep showArticles() aan met allArticles
  })
  .catch(error => console.error('Fout bij laden:', error));

// Maak een eventlistener voor de #filter-alle button
// Roep showArticles() aan met allArticles
all.addEventListener('click' , () => {
  showArticles(allArticles)
  console.log('geklikt')
})

// Maak een eventlistener voor de #filter-stad button
// Filter allArticles op category 'Stad' en roep showArticles() aan
stad.addEventListener('click', () => {
  showArticles(allArticles.filter(artikel => artikel.category === 'Stad'))
})
// Maak een eventlistener voor de #filter-technologie button
// Filter allArticles op category 'Technologie' en roep showArticles() aan
technologie.addEventListener('click', () => {
  showArticles(allArticles.filter(artikel => artikel.category === 'Technologie'))
})
// Maak een eventlistener voor de #filter-media button
// Filter allArticles op category 'Media' en roep showArticles() aan
media.addEventListener('click', () => {
  showArticles(allArticles.filter(artikel => artikel.category === 'Media'))
})