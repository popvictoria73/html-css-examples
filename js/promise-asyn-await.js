//  promise have resolve and reject must. 

// Syntax - new Promise (resolve,reject) // resolve means succes block and reject means error block
// the finally blcok will be executed either resolve or reject , in both the cases.

// when to use promises-
// when your paying some amount in online , you would get the OTP generally , wait unit otp gets and validated

// new Promise((resolve, reject) => {
//     setTimeout(() => resolve("hello reddy, I am a promise"), 3000),
//     setTimeout(() => reject("hello reddy, I am a promise"), 3000)
// })
// .finally(() => alert("Promise ready"))
// .then(result => alert(result)); // <-- .then handles the result

// syncronus - one by one , add a product to cart , remove a product from cart - it will take only one request at a time and need to wait until the request is success or fail.



// async and await 
// async,await make promises easier “.async makes a function return a Promise.await makes a function wait for a Promise


async function myDisplay() {

    let myPromise = new Promise(function (myResolve, myReject) {
        myResolve("We are good with async");
    });

    document.getElementById("demo").innerHTML = await myPromise;


}

myDisplay();




























