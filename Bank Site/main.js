let defbalance=1000
let newBal;
 
 
let form=document.getElementById("form");
let heading= document.getElementById("greet");
let balance= document.getElementById("balance");
let withdraw= document.getElementById("withdraw");
let deposit= document.getElementById("deposit");
let close= document.getElementById("close");
let input= document.getElementById("input")



if (form){form.onsubmit=function(){
name = document.getElementById("user").value;
}};
if (heading){
  heading.textContent=`Welcome, ${name  || 'Guest'}`;
  balance.textContent=`Balance = $${defbalance}`
};

 
//Increase Buttons
 
 
 
 
 
//Withdraw Function
function withdrawal(){
  const amount=Number (input.value)
if(amount<1){
     alert ("Enter a Valid Number")
     return;
   }
   newBal = defbalance - amount ;
if (newBal < 0) {
  alert("You cannot continue this transaction due to insufficient balance");
  return;
  };
    defbalance=newBal;
 balance.textContent=`Balance = $${newBal}`;
  alert("Successful");
    };

function deposition(){
   const amount=Number (input.value)
   if(amount<1){
     alert ("Enter a Valid Number")
     return;
   }
 newBal = amount + defbalance;
if (newBal > 10000) {
  alert("You Have exceeded your Limit");
  return;
};
defbalance = newBal;
balance.textContent = `Balance = $${newBal}`;
alert("Successful");
};


withdraw.onclick=function() {
  withdrawal()
}
  deposit.onclick=function (){
   deposition()
}
close.onclick=function (){
  window.close()
}