const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // super () calls the parent class's (Employee) constructor
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Project Manager';
    }
}

module.exports = Manager;