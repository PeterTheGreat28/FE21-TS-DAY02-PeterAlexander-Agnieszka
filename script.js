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
