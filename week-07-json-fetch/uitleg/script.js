let carList = document.getElementById('carList')

// let cars = [
//     {
//         name: "Fiat",
//         model: "500",
//         color: "white",
//     },
//     {
//         name: "Volvo",
//         model: "560",
//         color: "grey",
//     },
//     {
//         name: "BMw",
//         model: "X7",
//         color: "Black",
//     },
// ];

fetch('./cars.json')
.then(Response => Response.json())
.then(data => {
    for(let car of data){
    carList.innerHTML += `
    <p>${car.name}</p>`
}
})

