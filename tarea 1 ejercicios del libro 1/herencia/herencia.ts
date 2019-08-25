class Person {
    private name: string;
    constructor (theName: string){
        this.name = theName;
    }
    introduceSelf(){
        console.log ("Hi, I am " + this.name + "!" );
    }
}

class friend extends Person {
    yearsknown: number;
    constructor (name:string , yearsknown: number){
        super (name);
        this.yearsknown = yearsknown;
    }
    timeknown() {
        console.log("We have been friends for " + this.yearsknown +" years." )
    }
}
let friendA = new friend("jacob", 6);
friendA.introduceSelf();
friendA.timeknown();