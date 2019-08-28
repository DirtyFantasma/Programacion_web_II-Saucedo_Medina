enum Direction {
    up = 1,
    down = NaN,
    left = "asdasd".length,
    right = 1 << 1
}
var a= Direction.up;
console.log(Direction.down);

//sin asignacion de valor
enum color {red, green, blue};
let c: color = color.green;

//con asignacion de valor
enum Color {Red = 1, Green = 6, Blue = 4};
let b: Color = Color.Green;

//acceder a los nombres de los atributos

enum Color1 {RED = 1, GREEN, BLUE};
let colorname: string = Color [2];
alert(colorname);


//type alias


enum FooIdBrand { }
type FooId = FooIdBrand & string;

enum BarIdBrand { }
type BarId = BarIdBrand & string;

var fooId: FooId;
var barId: BarId;

fooId = barId;
barId = fooId; 

fooId = 'foo' as FooId;
barId = 'bar' as BarId;
//los dos tipos creados son compatibles con el la base que es string
var str: string;
str = fooId;
str = barId;