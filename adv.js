// Day 2 | Classwork | Advanced
// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Create a Parent Class called Vehicles
// Define properties and methods for the super Class
// Consider the inheritance concept
// Define 2 other Child classes and name them Motorbikes and Trucks
// Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user clicks on the button "show price" *use your dummy custom formula)
// you need to create 2 objects from each child class, and you can make a calculate method inside the class that will take for example the age and price and it is up to you to make any kind of calculation to it.
// var array: Array<Vehicle> = [];
var Vehicle = /** @class */ (function () {
    function Vehicle(vType, model, vAge, vImg) {
        this.vType = vType;
        this.model = model;
        this.vAge = vAge;
        this.vImg = vImg;
        console.log(this);
        array.push(this);
        console.table(array);
    }
    Vehicle.prototype.showMessage = function () {
        return "<p>" + this.vType + "</p>\n            <p>" + this.model + "</p>\n            <p>" + this.vAge + "</p>\n            <img src=\"" + this.vImg + "\">";
    };
    return Vehicle;
}());
newVehicle("Ghiath", "Serri", "https://pixabay.com/vectors/volkswagen-car-bus-mobile-home-158463/");
newVehicle("Theo", "patkos", "https://pixabay.com/illustrations/car-vehicle-sports-car-racing-car-49278/");
newVehicle("Acilio", "carraro", "https://pixabay.com/photos/car-audi-vehicle-oldtimer-f9-ddr-1661767/");
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(a, b, c, x) {
        var _this = _super.call(this, a, b, c) || this;
        _this.salary = x;
        return _this;
        // array.push(this);
    }
    Motorbikes.prototype.showMessage = function () {
        return _super.prototype.showMessage.call(this) + " <p>and the salary is " + this.salary + "</p> ";
    };
    return Motorbikes;
}(Vehicle));
new Test("test", "test", "https://cdn.pixabay.com/photo/2021/03/11/10/32/leaves-6086723_960_720.jpg", 3000);
// var array = [vehicle1,vehicle2,vehicle3];
console.table(array);
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var val = array_1[_i];
    document.getElementById("demo").innerHTML += val.showMessage();
}
// document.getElementById("demo").innerHTML = vehicle1.showMessage();
// document.getElementById("demo").innerHTML += vehicle2.showMessage();
// document.getElementById("demo").innerHTML += vehicle3.showMessage();
