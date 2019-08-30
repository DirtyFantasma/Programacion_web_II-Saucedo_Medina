function* generator() {
    try {
        yield 'foo';
        throw Error("Test");
    }
    catch (err) {
        console.log(err.message);
    }
}
var iterator = generator();
var foo = iterator.next();
console.log(foo.value);

//////////
function* generator1() {
    try {
        yield 'foo';
        throw Error("Test");
    }
    catch (err) {
        console.log(err.message);
    }
}
var iterator = generator();
var foo = iterator.next();
console.log(foo.value);
var foo = iterator.next();
//////////

function getFirstName() {
    setTimeout(function () {
        gen.next('alex')
    }, 1000);
}
function getSecondName() {
    setTimeout(function () {
        gen.next('perry')
    }, 1000);
}
function* sayHello() {
    var a = yield getFirstName();
    var b = yield getSecondName();
    console.log(a, b);
}
var gen = sayHello();
gen.next();