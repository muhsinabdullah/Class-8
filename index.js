let x = 5;
let y = 5;

let a = 5;
let b = '5';


console.log(x === y || a === b);
console.log(x === y && a === b);
console.log(x == y);

function runCode (){
    x === y ? console.log("before") : console.log("after");
}
runCode();

let myImage = document.getElementById('myImage');
let buttonSwitch = document.getElementById('switchButton');

buttonSwitch.addEventListener('click',() =>{
    if(myImage.src.match("bulbon")){
        myImage.src ="pic_bulboff.gif";
        buttonSwitch.innerHTML = "Switch on";
    } else{
        myImage.src ="pic_bulbon.gif";
        buttonSwitch.innerHTML = "Switch Off";
    }

});