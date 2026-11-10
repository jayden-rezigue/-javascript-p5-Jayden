let btnSave = document.getElementById('save')
let btnretrieve = document.getElementById('retrieve')
let result = document.getElementById("result")
let input = document.getElementById('input')

btnSave.addEventListener('click', () => {
    let inputValue = input.value.trim()
    localStorage.setItem("value", inputValue)
})

btnretrieve.addEventListener('click', () => {
    let getItem = localStorage.getItem("value")
    result.innerHTML = getItem
})
// Knop "Opslaan": gebruik localStorage.setItem() om de invoer op te slaan
// Knop "Ophalen": gebruik localStorage.getItem() om de waarde op te halen
// Null-check: toon een melding als er nog niets opgeslagen is
