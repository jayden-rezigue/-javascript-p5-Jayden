// Selecteer het formulier, invoerveld, takenlijst en teller
// taakToevoegen() — maak een <li> aan met een checkbox en verwijderknop
// toonTaken() — werk de teller bij
// Voeg listeners toe aan het formulier en de taken
let formulier = document.getElementById('task-form')
let invoerveld = document.getElementById('task-input')
let takenlijst = document.getElementById('tasks')
let takkenteller = document.getElementById('counter')

formulier.addEventListener('submit', (e)=> {
    e.preventDefault()
    const inputValue = invoerveld.value.trim()
    
    const taak = document.createElement('li')
    taak.textContent = inputValue

    const btn = document.createElement('button')
    btn.textContent = 'verwijderen'

    const checkbox = document.createElement('input')
    checkbox.type ='checkbox'

    taak.append(btn, checkbox)

    btn.addEventListener('click', ()=> {
        taak.remove();
    })

    takenlijst.appendChild(taak)
    invoerveld.value = ''
    teller()
});

const teller = () => {
const aantal = document.querySelectorAll('li')
takkenteller.textContent = aantal.length
}

