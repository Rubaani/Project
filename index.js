// console.log("Hello World!");

// var name = prompt("What is your name?");

// alert("Hello, This is me" + name);

var output = document.querySelector("#output");
var principal = document.querySelector("#principal");
var rate = document.querySelector("#rate");
var time = document.querySelector("#time");
var calculate = document.querySelector(".calculate"); 



 calculate.addEventListener('click',function calculate SI (){
    var SI = (principal.value*rate.value*time.value)/100;
     output.innerText = "Your Simple Interest is : " + SI;
 }
 );

// function calculateSI(){

//   var SI = (principal.value*rate.value*time.value)/100;
//   output.innerText = "Your Simple Interest is : " + SI;
// }
