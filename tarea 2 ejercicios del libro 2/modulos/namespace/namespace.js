"use strict";
exports.__esModule = true;
//exportacion de namespace
var MySpace;
(function (MySpace) {
    var MyClass = /** @class */ (function () {
        function MyClass() {
        }
        MyClass.myProperty = 1;
        return MyClass;
    }());
    MySpace.MyClass = MyClass;
})(MySpace || (MySpace = {}));
//primer tipo de importacion de namespace
console.log(MySpace.MyClass.MyProperty);
console.log(MySpace.MyClass.MyProperty);
