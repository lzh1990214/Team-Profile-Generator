const Intern = require("../lib/intern")

// test if Intern class is an object
describe("Intern", () => {
    it("should return an object", () => {
        const intern = new Intern();
        expect(typeof (intern)).toBe("object");
    })
});

// test getSchool() function
describe("getSchool", () => {
    it("should return the intern's school name", () => {
        const intern = new Intern('Jane', '123456', 'Jane123@gmail.com', 'GSD');
        expect(intern.getSchool()).toBe('GSD');
    })
})

// test getRole() function
describe("getRole", () => {
    it("should return the intern's role", () => {
        const intern = new Intern('Jane', '123456', 'Jane123@gmail.com', 'GSD');
        expect(intern.getRole()).toBe("Intern");
    })
});
