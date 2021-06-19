// anonymoys function
var add = function (n1, n2) {
    let total = n1 + n2;
    return total
}
function showMe(clickVal) {
    let finalTotal = add(2, 10)

    alert(finalTotal)
}


// IIFE - Immediately invoked function expression   - onload 

(function squ(n) {
    let sq = n * n;
    console.log(sq, 'multiply')
})(10)

// constructer function 

var num = new Function('p', 'q', 'r', 'return p * q * r')
//document.write("Value after multiplication: "+num(5, 2, 2));


// clouser - we can use clousers for dynamic parent and child function invocations,
//ex; I have a object with user data like first name , last name. address, phone  
function makeFunc() {
    var name = 'Reddy Web World';
    var userData = {

    }

    function displayName() {
       // alert(name);
    }

   
    return displayName;
}


var myFunc = makeFunc();

myFunc();



var mobile = {
    name:"vivo",
    color:"red",
    price:"20000"
}









