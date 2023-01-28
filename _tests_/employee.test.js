const Employee = require("../lib/employee")

describe("Employee", () => {
    // test if class Employee is an object
    it("should return an object", () => {
        const employee = new Employee();
        expect(typeof (employee)).toBe("object");
    })
});

// test getName() function
describe("getName", () => {
    it("should return the employee's name", () => {
        const name = new Employee('Sean');
        expect(name.getName()).toEqual('Sean');
    })
});

// test getId() function
describe("getId", () => {
    it("should return the employee's ID number", () => {
        const id = new Employee('Sean', '123456');
        expect(id.getId()).toEqual('123456');
    })
});

// test getEmail() function
describe("getEmail", () => {
    it("should return the employee's email address", () => {
        const email = new Employee('Sean', '123456', 'Sean123@gmail.com');
        expect(email.getEmail()).toEqual('Sean123@gmail.com');
    })
});

// test getRole() function
describe("getRole", () => {
    it("should return the employee's role", () => {
        const role = new Employee('Sean', '123456', 'Sean123@gmail.com');
        expect(role.getRole()).toEqual('Employee');
    })
})

