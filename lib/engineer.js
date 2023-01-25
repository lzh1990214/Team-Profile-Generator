const Employee = require('./employee')

class Engineer extends Employee() {
    constructor(name, id, email, github) {
        this.github = github;
        // super () calls the parent class's (Employee) constructor
        super(name, id, email);
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;