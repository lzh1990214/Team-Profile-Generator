const Employee = require('./employee')

class Intern extends Employee() {
    constructor(name, id, email, school) {
        this.school = school;
        // super () calls the parent class's (Employee) constructor
        super(name, id, email);
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;