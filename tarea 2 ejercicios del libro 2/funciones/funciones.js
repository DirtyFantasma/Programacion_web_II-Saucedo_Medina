var _this = this;
//este tipo funcion hace referencia al objeto que llama a esta función
setTimeout(function () {
    console.log(this);
}, 2000);
//este tipo de funciones, lo que hace es que el this no hace referencia al padre si no al objeto que contiene la funcion
setTimeout(function () {
    console.log(_this);
}, 2000);
//como evitar el tipo any y filtar solo por los tipos de datos que necesitamos
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return Array(padding.length + 1).join(" ") + value;
    }
    throw new Error("Expected String or number, got '" + padding + "' ");
}
console.log(padLeft("hello", "aaa"));
console.log(padLeft("hello", 5));
//console.log(padLeft("hello", true)); esta linea da error ya que hay un tipo de dato no perimitido en la funcion 
var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
y = x;
//x = y; da error ya que x solo tiene un parametro
var x1 = function () { return ({ name: 'Alice' }); };
var y1 = function () { return ({ name: 'Alice', location: 'Seattle' }); };
x1 = y1;
//y1 = x1; da error ya que y1 tiene dos parametros
