const form = document.querySelector("#shop-form")
const input = document.querySelector("#shop-input")
const button = document.querySelector("#Btn")
const lijst = document.querySelector("#list")
const count = document.querySelector("#counter")

const updateTeller = () => {
const aantal = document.querySelectorAll('li')
count.textContent = aantal.length
}


button.addEventListener('click', (e)=> {
    e.preventDefault()
    const inputValue = input.value.trim()
    
    const shopItem = document.createElement('li')
    shopItem.textContent = inputValue

    const Btn = document.createElement('button')
    Btn.textContent = 'verwijderen'

    const checkbox = document.createElement('input')
    checkbox.type ='checkbox'

    shopItem.append(Btn, checkbox)

    Btn.addEventListener('click', ()=> {
        shopItem.remove();
    })

    lijst.appendChild(shopItem)
    input.value = ''
    updateTeller()
});
