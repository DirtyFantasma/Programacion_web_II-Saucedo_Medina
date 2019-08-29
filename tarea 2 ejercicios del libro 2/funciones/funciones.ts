//este tipo funcion hace referencia al objeto que llama a esta función
setTimeout(function(){
    console.log(this);
}, 2000);
//este tipo de funciones, lo que hace es que el this no hace referencia al padre si no al objeto que contiene la funcion
setTimeout(() => {
    console.log(this);
}, 2000);
//como evitar el tipo any y filtar solo por los tipos de datos que necesitamos

function padLeft(value: string, padding: string | number){
    if (typeof padding === "number"){
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string"){
        return Array (padding.length + 1).join(" ") + value;
    }

    throw new Error(`Expected String or number, got '${padding}' `);
}
console.log(padLeft("hello","aaa"));
console.log(padLeft("hello", 5));
//console.log(padLeft("hello", true)); esta linea da error ya que hay un tipo de dato no perimitido en la funcion 