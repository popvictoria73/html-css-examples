var day = new Date().getDay()

function showMe(clickVal) {
    if (clickVal == "1") {
        alert("you clicked on one")
    }else if (clickVal == "2") {
        alert("you clicked on two")
    }else {
        alert("you clicked on other")
    }
}

function todayOffers(today) {
    switch (today) {
        case "sunday":
            alert('today is sunday no offers')
            break;
        case "monday":
            alert('today is monday. Apple mobile have 30% discount')
            break;
        case "tuesday":
            alert('today is tuesday. Samsung mobile have 30% discount')
            break;
        default:
            alert('your a default user no offers')
            break;

    }
}

function printMobile() {
    var mobiles = ["samsung","apple","vivo","oppo"];

    // for (let index = 0; index < mobiles.length; index++) {
        
    //     document.write("<br/>" + mobiles[index])
    // }

    // for in to get object property 

    
    // for( x in mobiles ) {
    //     console.log(x,'I am in for in loop')
    // }

    // for( let mob of mobiles ) {
    //     console.log(mob,'I am in for of loop')
    // }
    var x = 2
    // while (x<8) {
    //     console.log("till x less than",x)
    //     x++;
    // }

    do {
        console.log('Iam in do' ,x)
        x++
    } while (x<5);


    

















}













