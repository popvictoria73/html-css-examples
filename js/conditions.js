var day = new Date().getDay()

function showMe(clickVal) {

    if (clickVal == "1") {
        alert("you clicked on one")
    }
    else {
        alert("you clicked on two")
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


// switch (expression) {
//     case monday:
//     // monday code
//     case tuesday:
//     //tuesday code
//     default:
//     // come here default     
// }
