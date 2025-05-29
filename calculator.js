const select= document.getElementById("mySelect");
const button= document.getElementById("button");

let validation= prompt("Enter Password");
if (validation==2){
  alert ("you may proceed")
}else{
  window.close()
}

//Functions

function add(){
  let x = Number(prompt ("Select First Value"))
  let y = Number(prompt ("Select Second Value"))
  if (isNaN(x) || isNaN(y)){
    alert("Enter a valid Number")
    return;
  }else{
    alert(`${x} + ${y} = ${x+y}`);
  };
};

function subtract (){
  let x = Number(prompt ("Select First Value"))
  let y = Number(prompt ("Select Second Value"))
  if (isNaN(x) || isNaN(y)){
    alert("Enter a valid Number")
    return;
      }else{
    alert(`${x} - ${y} = ${x-y}`);
};
};

function multiply (){
  let x = Number(prompt ("Select First Value"))
  let y = Number(prompt ("Select Second Value"))
  if (isNaN(x) || isNaN(y)){
    alert("Enter a valid Number")
    return;
      }else{
    alert(`${x} × ${y} = ${x*y}`);
};
};

function divide (){
  let x = Number(prompt ("Select First Value"))
  let y = Number(prompt ("Select Second Value"))
  if (isNaN(x) || isNaN(y)){
    alert("Enter a valid Number")
    return;
      }else{
    alert(`${x} ÷ ${y} = ${x/y}`);
};
};

function exponential (){
  let x = Number(prompt ("Select First Value"))
  let y = Number(prompt ("Select Second Value"))
  if (isNaN(x) || isNaN(y)){
    alert("Enter a valid Number")
    return;
      }else{
    alert(`${x} ^ ${y} = ${x**y}`);
};
};

function modulus (){
  let x = Number(prompt ("Select First Value"))
  let y = Number(prompt ("Select Second Value"))
  if (isNaN(x) || isNaN(y)){
    alert("Enter a valid Number")
    return;
      }else{
    alert(`${x} ÷ ${y} = ${Math.floor(x/y)} Remainder = ${x%y}`);
};
};

function sqroot (){
  let x = Number(prompt ("Select Value"))
  if (isNaN(x)){
    alert("Enter a valid Number")
    return;
      }else{
    alert(`²√${x} = ${Math.sqrt(x)}`);
};
};

function cubroot (){
  let x = Number(prompt ("Select Value"))
  if (isNaN(x)){
    alert("Enter a valid Number")
    return;
      }else{
    alert(`³√${x} = ${Math.cbrt(x)}`);
};
};

//Events

button.onclick=function (){
  if (select.value==="Addition"){
    do{add()
  }while (confirm("Do you want to perform another Operation using 'Addition'?"))
}
  else if(select.value==="Subtraction"){
    do{subtract()
      }while (confirm("Do you want to perform another Operation using 'Subtraction'?"))
}
      else if (select.value==="Multiplication"){
        do{multiply ()
      }while (confirm("Do you want to perform another Operation using 'Multiplication'?"))
}
      else if (select.value=== "Division"){
        do{divide ()
      }while (confirm("Do you want to perform another Operation using 'Division'?"))
}
      else if(select.value==="Exponential"){
        do{exponential()
      }while (confirm("Do you want to perform another Operation using 'Exponential'?"))
}
      else if (select.value==="Square Root"){
        do{sqroot()
      }while (confirm("Do you want to perform another Operation using 'Square Root'?"))
}
      else if (select.value ==="Cube Root"){
        do{
          cubroot()
}while(confirm("Do you want to perform another Operation using 'Cube Root'?"))
}
else if (select.value==="Modulus") {
  do{
  modulus()
}while(confirm("Do you want to perform another Operation using 'Modulus'?"))
}
  else{
    alert("Not defined")
  }
};