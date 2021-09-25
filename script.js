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

//live text
//const elemIDFont = document.getElementById('msg-area');

