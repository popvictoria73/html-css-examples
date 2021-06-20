var myBtn = document.getElementById("myBtn");

myBtn.addEventListener('click', myStopFunction)

function myBtnField() {
    alert("your at myBtn click")
}


var p = document.createElement("p")
p.textContent = "I am dynamic p tag"

var divEle = document.createElement("div")
divEle.id = "myDiv"
divEle.className = "myDivClass"
divEle.textContent = "Welcome to ABC Course"
divEle.style.display = "none"

document.body.appendChild(divEle)

// var text = document.createTextNode("I am dynamic Text")


// divEle.replaceChild(text, divEle.childNodes[0])



//  ************* Time Out *******************//

// set interbal and clear interval 
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById("demo").innerHTML = time;
}

function myStopFunction() {
    clearInterval(myVar);
}

// settimeout and clear time out 
// var timeOut = setTimeout(() => {
//     alert("Hi")
// }, 20000);

// function clearMyTime() {
//     clearTimeout(timeOut)
// }

// arrow function

const multi = (num1, num2) => {

    return num1 * num2

};


// Symbol

var user = {
    name: "reddy",
    class: "B Tech",
    age: 29
}

// symbol is used to add any hidden element to the object , this will enable to provide more security 

let mid = Symbol('id'); user[mid] = 140353;

// default params 
function addition(x=10, y = 15) {
    // y is 10 if not passed or undefined 
  //  alert(x + y)
    return x + y;
}
// addition()

// rest params
function addition(...args) {
  //  alert(x + y)

  for(let i=0 ; i<= args.length; i++) {
    console.log(args[i])  
  }
    // return x + y;
}

//addition(1,2,3,4,5,6,940,35385)

var finalPad = "123" .padStart (10, 'r' )


Object.entries(user)



















































