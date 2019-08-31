//exportacion de namespace
namespace MySpace {
    export class MyClass {
        public static myProperty: number = 1;
    }
}
//primer tipo de importacion de namespace
console.log(MySpace.MyClass.MyProperty)
//segundo tipo de importacio
import { MySpace } from 'namespace.ts'; // Cuidado
console.log(MySpace.MyClass.MyProperty);