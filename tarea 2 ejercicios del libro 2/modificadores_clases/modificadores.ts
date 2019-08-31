class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}
var foo = new FooBase();
foo.x;
//foo.y; la siguiente linea da error ya que una variable privada
//foo.z; las siguiente linea da error ya que es una variable protegida

class FooChild extends FooBase {
    constructor() {
        super();
        this.x;
        //this.y;  la siguiente linea da error ya que una variable privada
        this.z;
    }
}