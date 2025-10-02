// THE LOGIC IS LKAREADY THERE FOR CaLCUTOR
// SO WE NEED USER INPUT FOR CALCULATION 

function main(){
    type1 = prompt("enter the firts number")
    typeSym = prompt("enter symbol")
    type2 = prompt("enter the second number")

    let num1 = parseFloat(type1)
    let num2 = parseFloat(type2)

    if(typeSym == "+"){
        total = num1 + num2;

    }else if(typeSym == "-"){
        total = num1 - num2;

    }else if(typeSym == "*"){
        total = num1 * num2;

    }else if(typeSym == "/"){
        total = num1 / num2

    }else{
        return alert("bruh type symbol!!!")
    }

    alert(total);
    
    console.log(main);
    
}
main();