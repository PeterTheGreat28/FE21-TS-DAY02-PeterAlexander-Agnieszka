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

// the above needs something to refer to, so:

// let lostMan = new Person ("Peter Alexander", 30, "Cardena");
// // console.log(lostMan.showMessage());


console.log(new Person("Pixie", 21, "Doe"));





// basic 2 - Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”



class extraInfo extends Person {
    salary;
    jobLocation;


    constructor (fname: string, lname: string, age: number, jobTitle: string, salary:number, jobLocation: string) {
        super(fname, lname, age, jobTitle);
        this.salary = salary;
        this.jobLocation = jobLocation;
    }

    showMessage (){
        return `${super.showMessage()} and I get ${this.salary} every month, and I work on ${this.jobLocation}.`;
    }

}
let betterHumanBeing = new extraInfo ("Jon", "Snow", 24, "Warden of the North", 4500, "The Wall");
console.log(betterHumanBeing.showMessage());