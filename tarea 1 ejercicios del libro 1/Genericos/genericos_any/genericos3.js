function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [103, 458.472, 458];
var randomPosition = randomElem(positions);
var colors = ['Violet', 'indigo', 'blue', 'green'];
var randomColor = randomElem(colors);
