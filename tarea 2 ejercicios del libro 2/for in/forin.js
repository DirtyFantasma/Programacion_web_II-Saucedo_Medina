//for in accediendo al valor de una variable dentro de un objeto
var list = { a: 1, b: 2, c: 3 };
for (var i in list) {
    console.log(list[i]);
}
//for in accediendo al índice de una variable dentro de un objeto
var list2 = { a: 1, b: 2, c: 3 };
for (var i in list2) {
    console.log(i);
}
