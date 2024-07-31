var printTeacher = function (firstName, lastName) {
    return firstName.charAt(0) + ". " + lastName;
};
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Student.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    Student.prototype.displayName = function () {
        return this.firstName;
    };
    return Student;
}());
var teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false
};
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
var student = new Student('Jane', 'Smith');
console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
console.log(student.workOnHomework());
console.log(student.displayName());
