// bind

var student = {
  firstname: "Reddy",
  lastname: "Uppathi ",
  getStudentName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};
var studName = function () {
  console.log(this.getStudentName() + "Web Dev!");
};
var getStud = studName.bind(student); // creates new object and binds this
getStud(); // 'Reddy Reddy Web Dev!'


// apply and bind

var studentName = function(snack, hobby) {
    console.log(this.getStudentName() + ' loves ' + snack + ' and ' + hobby);
};

studentName.call(student,'Sweet', 'Web Dev'); // Reddy Uppathi  loves Reddy and Web Dev
studentName.apply(student,['Sweet', 'Web Dev']); // Reddy Uppathi  loves Reddy and Web Dev