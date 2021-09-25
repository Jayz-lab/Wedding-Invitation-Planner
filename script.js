/*inital JavaScript- adding basic code: creating h2 element w/txtContent */
//const h2 = document.createElement('h2');
//h2.textContent = "This content added by JavaScript";

/*add h2 element to the body element in the DOM.*/
//document.querySelector('body').appendChild(h2);

//onClikc Event: https://www.w3schools.com/jsref/event_onclick.asp
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

//live text
function getName() {
    console.log("I am activated");
    var nameStr = document.getElementById('name').value;
    document.getElementById("initial").innerHTML = nameStr.substr(0,1).toUpperCase();
}