// Voeg een event listener toe aan de knop
// Maak een <li> element aan met de tekst uit het invoerveld
// Voeg een verwijderknop toe aan elk <li> element
const button = document.getElementById('add');
let list = document.getElementById('list')
const input = document.getElementById('input')

button.addEventListener('click', ()=> {
    const inputValue = input.value.trim()
    
    const lijst = document.createElement('li')
    lijst.textContent = inputValue

    const BTN = document.createElement('button')
    BTN.textContent = 'verwijderen'

    lijst.appendChild(BTN)

    BTN.addEventListener('click', ()=> {
        lijst.remove();
    })

    list.appendChild(lijst)
    input.value = ''

});