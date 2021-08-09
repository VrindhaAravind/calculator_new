function displayvalue(num){
let inputbox=document.getElementById("inpt")
inputbox.value+=num;}


function evaluateExpression(){
    let cur_value=inpt.value;
    let res=eval(cur_value);
    inpt.value=res;
}

function clearBox(){
    inpt.value="";
}

function removeElement(){
    inpt.value=inpt.value.slice(0,-1)
}