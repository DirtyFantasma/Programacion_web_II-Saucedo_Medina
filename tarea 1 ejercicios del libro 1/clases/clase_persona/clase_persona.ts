class person {
    name: string;
    constructor(theName: string){
        this.name = theName;
    }
    introduceSelf(){
        console.log("Hi, I am " + this.name + "!");
    }
}
let personA = new person("sally");
personA.introduceSelf();