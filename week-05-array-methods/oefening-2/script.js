const names = ['Anna', 'Bob', 'Charlotte', 'David', 'Emma', 'Frank', 'Grace', 'Henk', 'Isabel', 'Jan', 'Karen', 'Lars'];


const searchFind = document.getElementById('search-find')
const searchOutput = document.getElementById('output-find')
const searchIncludes = document.getElementById('search-includes')
const outputInclude = document.getElementById('output-includes')

searchFind.addEventListener('change',() => {


    let searchInput = searchFind.value.toLowerCase()

    let found = names.find(name => name.toLowerCase().startsWith(searchInput));
    console.log(found);
    searchOutput.textContent = found

    searchFind.value = "";  
})
// Sectie 1: zoek de eerste naam die begint met de ingevoerde letter
//           gebruik find() + startsWith() + toLowerCase(). 
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 
// Sectie 2: controleer of een ingevoerde naam in de lijst staat (uitkomst is true of false)
//           gebruik includes() + toLowerCase()
//           Zorg dat de input leeg is nadat de zoekopdracht is voltooid 

let lowerNames = names.map(name => name.toLowerCase())
searchIncludes.addEventListener('change',() => {

    let lowerInput = searchIncludes.value.toLowerCase()

    let exists = lowerNames.includes(lowerInput)

    outputInclude.textContent = exists
    searchIncludes.value = ''
})