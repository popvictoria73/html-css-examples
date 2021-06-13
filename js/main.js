function alertMe() {

    var name123 = "mike"; // function scope

    // if is a block 
    if (name123 == "mike") {
        let myCar = "Tesla";  // block scope
        const price = "20 L"; // block scope
        console.log(myCar, 'inside block let')
        console.log(price, 'inside block const')
    }

    console.log(myCar, 'outside block let')
    console.log(price, 'outside block const')

}
