const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const output = document.getElementById("output")
const toggle = document.getElementById("toggle")

let mode = 0
toggle.addEventListener("click",function(){
    if (mode == 0) {
        document.body.style.backgroundColor="black"
        toggle.innerHTML="Light"
        mode = 1
       }
        else {
             document.body.style.backgroundColor="white"
             toggle.innerHTML="Dark"
             mode = 0
             }
})

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  const firstValue = firstInput.value * 1;
  const secondValue = secondInput.value * 1;
  output.style.color="#3b5998"
  output.innerHTML=`<p>The addition of two number is : ${firstValue + secondValue} </p>`
  console.log(firstValue + secondValue);
  firstInput.value = "";
  secondInput.value = "";
});

subtractButton.addEventListener("click", function (event) {
  event.preventDefault();
  const firstValue = firstInput.value * 1;
  const secondValue = secondInput.value * 1;
  output.style.color="#3b5998"
  output.innerHTML=`<p>The Subtraction of two number is : ${firstValue - secondValue} </p>`
  console.log(firstValue - secondValue);
  firstInput.value = "";
  secondInput.value = "";
});

multiplyButton.addEventListener("click", function (event) {
  event.preventDefault();
  const firstValue = firstInput.value * 1;
  const secondValue = secondInput.value * 1;
  output.style.color="#3b5998"
  output.innerHTML=`<p>The Multiplication of two number is : ${firstValue * secondValue} </p>`
  console.log(firstValue * secondValue);
  firstInput.value = "";
  secondInput.value = "";
});

divideButton.addEventListener("click", function (event) {
  event.preventDefault();
  const firstValue = firstInput.value * 1;
  const secondValue = secondInput.value * 1;
  if (secondValue === 0) {
    output.style.color="#FF0000"
    output.innerHTML=`<p>The Division of Zero is not allowed</p>`
} else 
  output.style.color="#3b5998"
  output.innerHTML=`<p>The Division of two number is : ${firstValue / secondValue} </p>`
  console.log(firstValue / secondValue);
  firstInput.value = "";
  secondInput.value = "";
});
