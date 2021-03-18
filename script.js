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
var Person = /** @class */ (function () {
    function Person(fname, lname, age, jobTitle) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.showMessage = function () {
        return "Hello there, my name is " + this.fname + " and I am " + this.age + " years old.";
    };
    return Person;
}());
// the above needs something to refer to, so:
// let lostMan = new Person ("Peter Alexander", 30, "Cardena");
// // console.log(lostMan.showMessage());
console.log(new Person("Peter Alexander", 30, "Cardena"));
// basic 2 - Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var extraInfo = /** @class */ (function (_super) {
    __extends(extraInfo, _super);
    function extraInfo(fname, lname, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, fname, lname, age) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    extraInfo.prototype.showMessage = function () {
        return _super.prototype.showMessage.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation;
    };
    return extraInfo;
}(Person));
var betterHumanBeing = new extraInfo("Jon", "Snow", 24, "Warden of the North", 4500, "The Wall");
console.log(betterHumanBeing.showMessage());
