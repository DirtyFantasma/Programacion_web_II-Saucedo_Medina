function randomElem(theArray: any[]): any {
    let randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
let positions = [103,458.472,458];
let randomPosition = randomElem (positions);
//se agrego string[] para que sea seguro que se inserta una cadena
let colors: string[] = ['Violet','indigo','blue','green'];
let randomColor = randomElem (colors);

// la siguiente funcion es para eliminar caracteres tipo char 

function removeChar(theString: string, theChar: string): string {
    let theRegex = new RegExp(theChar, "gi");
    return theString.replace(theRegex, '');
}