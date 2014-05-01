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
    myApp.current= index;
    document.getElementById("").value= myApp.oceanCreature[index].name;
    document.getElementByID("").value= myApp.oceanCreautre[index].size;
    document.getElementById("").value= myApp.oceanCreature[index].img;
    
    myApp.saveEdit = function(){
        var name = document.getElementById("").value;
        var size = document.getElementById("").value;
        myApp.oceanCreature[myApp.editCreature].name = name;
        myApp.oceanCreature[myApp.editCreature].size = size;

    }
myApp.deleteCreature = function (key) {

    var request = new XMLHttpRequest();

    request.open('DELETE', myApp.url + key + '.json', true);

    request//and continue one with normal ajax request
}