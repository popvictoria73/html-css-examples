class User {

    //constructor block
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }


    // since this.age is availabe in constructor I can use in my below methods as required by uisng the this keywotrd
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }

    myName() {
        return this.name;
    }
}

var curUser = new User("Raju", 1990);

function getAge() {
    alert('Your name is ' + curUser.myName() + ' and age is ' + curUser.age())
}

