Promise.resolve(123)
    .then(function (res) {
    console.log(res);
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
});
// se puede manejar errores añadiendo un catch
Promise.reject(new Error('something bad happened'))
    .then(function (res) {
    console.log(res);
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})["catch"](function (err) {
    console.log(err.message);
});
//metodo catch para continuar la cadena
Promise.reject(new Error('something bad happened'))
    .then(function (res) {
    console.log(res);
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(123);
})["catch"](function (err) {
    console.log(err.message);
});
// 
Promise.resolve(123)
    .then(function (res) {
    throw new Error('something bad happened');
    return 456;
})
    .then(function (res) {
    console.log(res);
    return Promise.resolve(789);
})["catch"](function (err) {
    console.log(err.message);
});
//
Promise.resolve(123)
    .then(function (res) {
    throw new Error('something bad happened');
    return 456;
})
    .then(function (res) {
    console.log(res); // never called
    return Promise.resolve(789);
})["catch"](function (err) {
    console.log(err.message); // something bad happened
});
