let x: [string, number];
// inicializacion correcta
x = ["hello",10];

//forma erronea de inicializar
//x = [10, "hello"];

//forma correcta de acceder a los datos de un tupla
console.log (x[0].substr(1));

//forma incorrecta de acceder a los datos
//console.log (x[1].substr(1));

//acceder a un elemento sin conocer el mapeo

x[3] = "world";
console.log (x[5].toString());
x[6] = true;