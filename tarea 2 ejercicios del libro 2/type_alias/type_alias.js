function getName(n) {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}
// el operador & se utiliza para crear un tipo de dato base
var FooIdBrand;
(function (FooIdBrand) {
})(FooIdBrand || (FooIdBrand = {}));
var BarIdBrand;
(function (BarIdBrand) {
})(BarIdBrand || (BarIdBrand = {}));
