const Employee = require('./employee')

class Manager extends Employee() {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
        // super () calls the parent class's (Employee) constructor
        super(name, id, email);
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;