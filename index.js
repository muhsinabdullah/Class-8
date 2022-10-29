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

function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}