function getAnimal() {
    var a;
    return a;
}
function isFish(pet) {
    return pet.swin != undefined;
}
var pet = getAnimal();
if (isFish(pet)) {
    pet.swin();
    console.log('glup');
}
else {
    console.log('belive i can fly');
    pet.fly();
}
