const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // super () calls the parent class's (Employee) constructor
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Software Engineer';
    }
}

module.exports = Engineer;