//for in accediendo al valor de una variable dentro de un objeto
let list = {a: 1, b: 2, c:3};
for(let i in list){
    console.log(list[i])
}

//for in accediendo al índice de una variable dentro de un objeto

let list2 = {a: 1, b:2, c:3};
for(let i in list2){
    console.log(i);
}