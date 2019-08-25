class Person {
    private name: string;
    protected age: number;
    constructor(theName: string, theAge: number) {
        this.name = theName;
        this.age = theAge;
    }
    introduceSelf() {
        console.log("Hi, I am " + this.name + "!");
    }
}

class friend extends Person {
    yearsknown: number;
    constructor(name: string, age: number, yearsknown: number) {
        super(name, age);
        this.yearsknown = yearsknown;
    }
    timeknown() {
        console.log("We have been friends for " + this.yearsknown + " years.")
    }
    friendSince(){
        let firstAge = this.age - this.yearsknown;
        console.log(`We have been friends since I was ${firstAge} years old.`)
    }
}
let friendA = new friend("william", 19, 8);
friendA.friendSince();