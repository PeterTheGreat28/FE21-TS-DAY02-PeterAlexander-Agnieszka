// Day 2 | Classwork | Advanced
// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept
// Define 2 other Child classes and name them Motorbikes and Trucks
// Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)



// you need to create 2 objects from each child class, and you can make a calculate method inside the class that will take for example the age and price and it is up to you to make any kind of calculation to it.

// var array: Array<Vehicle> = [];


class Vehicle {
  vType;
  model;
  vAge;
  vImg;
  constructor (vType : string, model : string, vAge : number, vImg : string) {
   this.vType = vType;
   this.model = model;
   this.vAge = vAge;
   this.vImg = vImg;
    console.log(this);
    array.push(this);
    console.table(array);
  }
  showMessage() {
    return `<p>${this.vType}</p>
            <p>${this.model}</p>
            <p>${this.vAge}</p>
            <img src="${this.vImg}">`
  }
}
newVehicle("Ghiath", "Serri", "https://pixabay.com/vectors/volkswagen-car-bus-mobile-home-158463/");
newVehicle("Theo", "patkos", "https://pixabay.com/illustrations/car-vehicle-sports-car-racing-car-49278/");
newVehicle("Acilio", "carraro", "https://pixabay.com/photos/car-audi-vehicle-oldtimer-f9-ddr-1661767/");


class Motorbikes extends Vehicle {
  salary: number;
  constructor(a, b, c, x) {
    super(a, b, c);
    this.salary = x;
    // array.push(this);
  }
  showMessage() {
    return `${super.showMessage()} <p>and the salary is ${this.salary}</p> `;
  }
}
new Test("test", "test", "https://cdn.pixabay.com/photo/2021/03/11/10/32/leaves-6086723_960_720.jpg", 3000);
// var array = [vehicle1,vehicle2,vehicle3];
console.table(array);
for (let val of array) {
  document.getElementById("demo").innerHTML += val.showMessage();
}
// document.getElementById("demo").innerHTML = vehicle1.showMessage();
// document.getElementById("demo").innerHTML += vehicle2.showMessage();
// document.getElementById("demo").innerHTML += vehicle3.showMessage();