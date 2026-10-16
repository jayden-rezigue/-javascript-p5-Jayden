const car = {
  name: 'Golf',
  brand: 'Volkswagen',
  year: 2008,
  mileage: 145000,
  description() {
    // Vul in: geef een zin terug met this.name en this.brand via template literal
    return `de naam is ${this.name} en de brand is ${this.brand}
    }`
  },
  isOld() {
    // Vul in: geef true terug als het year voor 2010 is
    return this.year < 2010;
  },
  drive(km) {
    // Vul in: verhoog this.mileage met km en geef de nieuwe km-stand terug
    this.mileage += km;

    return this.mileage;
  },
};

// Toon de resultaten in de drie output-elementen
console.log(car.drive(10)); 
console.log(car.mileage);     