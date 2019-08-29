interface Bird {
    fly();
    layEggs();
}

interface Fish{
    swin();
    layEggs();
}
function getAnimal() : Fish | Bird {
    var a : Fish;
    return a;
}
let pet = getAnimal();
pet.layEggs();
//pet.swin(); esta linea da error ya que no exite en bird