type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string"){
        return n;
    }
    else{
        return n();
    }
}

//los type alias no solo pueden ser tipos de datos genericos, tambien pueden utilizar parametros
type Container<T> = { value: T};
//tambien puden hacer referencia a sí mismo:
type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}
// el operador & se utiliza para crear un tipo de dato base

enum FooIdBrand {}
type FooId = FooIdBrand & string;

enum BarIdBrand{}
type BarId = BarIdBrand & string;