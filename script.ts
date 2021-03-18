class Person {
    fname;
    lname;
    age;
    jobTitle;
    constructor(fname: string, lname: string, age: number, jobTitle: string) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.jobTitle = jobTitle;
    }

    showMessage() {
        return `Hello there, my name is ${this.fname} and I am ${this.age} years old.`;
    }
}