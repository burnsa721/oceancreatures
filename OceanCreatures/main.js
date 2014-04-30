var myApp = {};

myApp.OceanCreatures = [];

myApp.OceanCreatures = function () {
    this.name = name;
    this.size = size;
    this.img = img;
}

myApp.createCreature = function () {
    var name = document.getElementById("name").value;
    var size = document.getElementById("size").value;
    var img = document.getElementById("img").value;
    myApp.OceanCreatures.push(name, size, img);

    var display = document.getElementById("table").innerHTML;

    name = "";
    size = "";
    img = "";
}
myApp.editCreature = function();
myApp.current

myApp.deleteCreature = function (key) {

    var request = new XMLHttpRequest();

    request.open('DELETE', myApp.url + key + '.json', true);

    request//and continue one with normal ajax request
}