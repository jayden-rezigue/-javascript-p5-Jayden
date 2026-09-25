const title = document.getElementById('title')
const btn = document.getElementById('btn')
const section = document.getElementById('section')

const naam = 'Jayden';
const opleiding = 'software developer mbo4';

let aantalKlikken = 0;

const berekenPunten = () =>{
return aantalKlikken*10
}


btn.addEventListener('click',  () => {
  title.textContent = `De knop is geklikt!`;

    title.classList.toggle('active')

  aantalKlikken += 1

    const p = document.createElement('p');

    p.textContent = `ik heb ${berekenPunten()} keer geklikt`

    section.appendChild(p)
  
});