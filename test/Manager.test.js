// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const officeNum = 123;
  const manager = new Manager("david@gmail.com", 5, "David Deida", 123);

  expect(manager.officeNum).toBe(officeNum);
});

test('getRole() should return "Manager"', () => {
  const role = "Manager";
  const manager = new Manager("david@gmail.com", 5, "David Deida", 123);

  expect(manager.getRole()).toBe(role);
});

test("Can get office number via getOffice()", () => {
  const officeNum = 123;
  const manager = new Manager("david@gmail.com", 5, "David Deida", 123);
  const result = manager.getOfficeNumber()

  expect(result).toBe(officeNum);
});
