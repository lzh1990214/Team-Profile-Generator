const Engineer = require("../lib/engineer")

// test if engineer class is an object
describe("Engineer", () => {
    it("should return an object", () => {
        const engineer = new Engineer();
        expect(typeof (engineer)).toBe("object");
    })
});

// test getGithub() function
describe("getGithub", () => {
    it("should return the engineer's GitHub profile name", () => {
        const github = new Engineer('Sean', '123456', 'Sean123@gmail.com', 'Sean1990');
        expect(github.getGithub()).toBe('Sean1990');
    })
});

// test getRole() function
describe("getRole", () => {
    it("should return the employee's role", () => {
        const role = new Engineer('Sean', '123456', 'Sean123@gmail.com', 'Sean1990');
        expect(role.getRole()).toBe('Software Engineer');
    })
});