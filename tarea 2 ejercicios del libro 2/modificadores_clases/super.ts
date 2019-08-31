//super sin fat arrow
class Base{
    log() { console.log('hello world'); }
}
class Child extends Base {
    log() { super.log}
}

//this con fat arrow
class Base2 {
    log = () => {console.log('hello word');}
}
class Child2 extends Base2 {
    logWorld(){ this.log()};
}