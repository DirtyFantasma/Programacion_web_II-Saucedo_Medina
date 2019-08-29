interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swin();
    layEggs();
}
function getAnimal(): Fish | Bird {
    var a: Fish;
    return a;
}
function isFish(pet: Fish |Bird): pet is Fish {
    return(<Fish>pet).swin != undefined;
}
let pet = getAnimal();

if(isFish(pet)){
    (<Fish>pet).swin();
    console.log('glup');
} else{
    console.log('belive i can fly');
    pet.fly();
}