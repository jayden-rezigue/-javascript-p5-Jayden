// Selecteer alle vakken met querySelectorAll als houvast
// Loop met een for of loop door elk vak en voeg aan elk vak een click-event toe dat de klasse 'active' wisselt
const box = document.querySelectorAll('.box')

for (const value of box) {
    value.addEventListener('click', ()=>{
        value.classList.toggle('active')
    })
}