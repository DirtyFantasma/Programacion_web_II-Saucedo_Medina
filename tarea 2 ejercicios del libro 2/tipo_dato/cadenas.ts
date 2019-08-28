//string
let color: string = "blue";
color = "red";

let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = 'hello, my name is ${ fullName }. I ll be $ { age + 1 } years old nexth month.'

let sentence1: string = "hello, my name is " + fullName + "." + "I'll be" + (age + 1) + " years old next month."
// plantillas de string
var lyrics = 'Never gonna give you up';
var html = '<div>${lyrics}</div>';
// string literal type
let literalString = 'Hello';
let literalString1 = 'Hello';
literalString1 = 'Bye';

type CardinalDirection =
    "North"
"East"
"South"
"West";
function move(distance: number, direction: CardinalDirection) {

}

move(1, "North");
//move(1, "Nurth");