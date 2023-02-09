// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const emp = new Employee();
  expect(emp instanceof Employee).toEqual(true)
});

test("Can set name via constructor arguments", () => {
  const name = "Miyamoto Musashi";
  const emp = new Employee(name);
  
  expect(emp.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const id = 19;
  const emp = new Employee("Luffy", id);
  
  expect(emp.id).toEqual(id);
  
});

test("Can set email via constructor argument", () => {
  const email = "miyamotomusashi@gmail.com";
  const emp = new Employee("Luffy", 12, email);
  
  expect(emp.email).toBe(email);

});

test("Can get name via getName()", () => {
  const emp = new Employee();
  const name = "Miyamoto";
  const result = emp.getName(name);

  expect(result).toEqual(name);
});

test("Can get id via getId()", () => {
  const emp = new Employee();
  const id = 12;
  const result = emp.getId(id);

  expect(result).toEqual(id);
});

test("Can get email via getEmail()", () => {
  const emp = new Employee();
  const email = "miyamoto@gmail.com";
  const result = emp.getEmail(email);

  expect(result).toEqual(email);
});

test("getRole() should return \"Employee\"", () => {
  const emp = new Employee();
  const role = "Employee";
  expect(emp.getRole()).toEqual(role);
});
