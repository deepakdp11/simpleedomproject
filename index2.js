var body = document.getElementsByTagName("body")[0];

var outerDev = document.getElementById("outerDiv");


var innerDev = document.getElementById("innerDiv");

var button = document.getElementById("btn");


function clickHandler(){
    //where it was clicker
    console.log(event.target);
}

button.addEventListener("click",clickHandler);
innerDiv.addEventListener("click",clickHandler);
outerDev.addEventListener("click",clickHandler);
body.addEventListener("click",clickHandler);