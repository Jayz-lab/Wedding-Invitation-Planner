/*inital JavaScript- adding basic code: creating h2 element w/txtContent */
//const h2 = document.createElement('h2');
//h2.textContent = "This content added by JavaScript";

/*add h2 element to the body element in the DOM.*/
//document.querySelector('body').appendChild(h2);

//Design choices- 3 different colors
/* color change
const elemID = document.getElementById('right-col');

function changeBackground(color){
    elemID.style.backgroundColor = color;
}
*/

//image change- 3 choices- 3 functions
function design1(){
    document.getElementById('myImage')
    .src="/image/image1.jpg";
}

function design2(){
    document.getElementById('myImage')
    .src="/image/image2.jpg";
}

function design3(){
    document.getElementById('myImage')
    .src="/image/image3.jpg";
}

//Form field live text
function getName() {
    var nam = document.getElementById('name').value;
    document.getElementById("input").innerHTML = "" + nam;
}

function getDate() {
    var d = document.getElementById('date').value;
    document.getElementById("input2").innerHTML = "" + d;
}

function getVenue() {
    var v = document.getElementById('venue').value;
    document.getElementById("input3").innerHTML = "" + v;
}

/*
function getName() {
    console.log("I am activated");
    var nameStr = document.getElementById('name').value;
    document.getElementById("initial").innerHTML = nameStr.substr(0,1).toUpperCase();
};
*/
