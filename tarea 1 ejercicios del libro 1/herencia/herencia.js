var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi, I am " + this.name + "!");
    };
    return Person;
}());
var friend = /** @class */ (function (_super) {
    __extends(friend, _super);
    function friend(name, yearsknown) {
        var _this = _super.call(this, name) || this;
        _this.yearsknown = yearsknown;
        return _this;
    }
    friend.prototype.timeknown = function () {
        console.log("We have been friends for " + this.yearsknown + " years.");
    };
    return friend;
}(Person));
var friendA = new friend("jacob", 6);
friendA.introduceSelf();
friendA.timeknown();
