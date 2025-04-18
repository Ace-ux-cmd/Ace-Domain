 const name = prompt('Enter Username to proceed');
const greet= document.getElementById('page');
if (Boolean(name) === false){
  window.close()
};

greet.textContent= `Welcome, ${name};`




const addition= document.getElementById('add');
const subtraction= document.getElementById('sub');
const multiplication= document.getElementById('multi');
const division=document.getElementById('div');
const power=document.getElementById('exp');
const remainder= document.getElementById('mod');
const button= document.getElementById('button')

//For addition
button.onclick=function(){
  const x=  Number (document.getElementById('Value1').value);
const y= Number(document.getElementById('Value2').value);
const  add= Number (document.getElementById('Value1').value)+ Number(document.getElementById('Value2').value);

//Subtraction
const  minus= Number (document.getElementById('Value1').value)-Number(document.getElementById('Value2').value);

//Division
const  divide= Number (document.getElementById('Value1').value)/ Number(document.getElementById('Value2').value);

//Multiplication
const  multiply= Number (document.getElementById('Value1').value)* Number(document.getElementById('Value2').value);

//power
const  expo= Number (document.getElementById('Value1').value)** Number(document.getElementById('Value2').value);
 
 //modulus
 const  remain= Number (document.getElementById('Value1').value)% Number(document.getElementById('Value2').value);
 
 //Values
 
  addition.textContent= `${x} + ${y} = ${add}`;
  subtraction.textContent= `${x} - ${y} = ${minus}`;
  multiplication.textContent= `${x} × ${y} = ${multiply}`;
  division.textContent= `${x} ÷ ${y} = ${divide}`;
  power.textContent= `${x} ^ ${y} = ${expo}`;
  remainder.textContent= `${x} % ${y} = Remainder ${remain}`;
};￼Enter
