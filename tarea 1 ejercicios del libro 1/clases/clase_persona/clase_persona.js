var person = /** @class */ (function () {
    function person(theName) {
        this.name = theName;
    }
    person.prototype.introduceSelf = function () {
        console.log("Hi, I am " + this.name + "!");
    };
    return person;
}());
var personA = new person("sally");
personA.introduceSelf();
