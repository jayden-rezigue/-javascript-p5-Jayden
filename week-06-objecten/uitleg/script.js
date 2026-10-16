const container = document.getElementById('container')

const rekening = {
    //properties//
    eigenaar: "jayden de vries",
    saldo: 20,
    rekeningnummer: "NL10ING1231234123",
    geblokkeerd: false,
    pincode: "3200",
    daglimiet: 500,
    transacties: [],
    toonSaldo(){
        return this.saldo
    },

    changeSaldo(amount){
        this.saldo += amount
        this.transacties.push(amount)
        return"het bedrag ${amount} is toegevoegd aan uw rekening"
    }
}

console.log(rekening.transacties)

rekening.changeSaldo(1000)


console.log(rekening.toonSaldo())

console.log(rekening.saldo)
console.log(rekening.rekeningnummer)

container.innerHTML = `
<h2>${rekening.eigenaar}</h2>
<h3>${rekening.saldo}</h3>
<p>${rekening.rekeningnummer}</p>
`