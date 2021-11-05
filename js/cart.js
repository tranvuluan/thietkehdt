var prince=55;

function updateCartProductAmountDown(id){
    console.log(id);
    let amount=parseInt(document.getElementById(id+"-amount-text").value)-1;
    let sum=prince*amount;
    document.getElementById(id+"-amount-text").value=amount;
    document.getElementById(id).innerHTML="$"+sum;
    document.getElementById(id).value=sum;
}

function updateCartProductAmountUp(id){
    console.log(id);
    let amount=parseInt(document.getElementById(id+"-amount-text").value)+1;
    let sum=prince*amount;
    document.getElementById(id+"-amount-text").value=amount;
    document.getElementById(id).innerHTML="$"+sum;
    document.getElementById(id).value=sum;
    
}