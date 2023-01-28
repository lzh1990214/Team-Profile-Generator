const Manager = require("../lib/manager")

// test if Manager class is an object
describe("Manager", () => {
    it("should return an object", () => {
        const manager = new Manager();
        expect(typeof (manager)).toBe("object");
    })
});

// test getRole() function
describe("getRole", () => {
    it("should return the manager's role", () => {
        const manager = new Manager('Mike', '123456', 'Mike123@gmail.com', '1234567890');
        expect(manager.getRole()).toBe("Project Manager");
    })
});

