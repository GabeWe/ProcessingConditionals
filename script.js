var containerEle = document.body.querySelector(".container");
var num1= Number(prompt("Enter a number"));
if (isNaN(num1))
    containerEle.innerHTML="Error, number 1 is not a number";
var num2= Number(prompt("Enter another number"));
if (isNaN(num2))
    containerEle.innerHTML="Error, number 2 is not a number";
var operator = '+'
var operator = "-"
var operator = "*"
var operator = "/"
var sum = (num1+num2);
var diff= (num1-num2);
var factor= (num1*num2);
var division= (num1/num2);
var operator = (prompt("Please select operation, +,-,*,/."));
if(operator=="+"){
  containerEle.innerHTML="Your answer is "+ sum;
}else if(operator=="-"){
  containerEle.innerHTML="Your answer is "+ diff;
}else if(operator=="*"){
  containerEle.innerHTML="Your answer is "+ factor;
}else if(operator=="/"){
  containerEle.innerHTML="Your answer is "+ division;
}