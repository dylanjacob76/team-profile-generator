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
  const name = "Miyamoto";
  const emp = new Employee("Miyamoto", 2, "moto@gmail.com");
  const result = emp.getName();

  expect(result).toEqual(name);
});

test("Can get id via getId()", () => {
  const id = 1584;
  const emp = new Employee("Miyamoto", 1584, "moto@gmail.com");
  const result = emp.getId();

  expect(result).toEqual(id);
});

test("Can get email via getEmail()", () => {
  const email = "moto@gmail.com";
  const emp = new Employee("Miyamoto", 2, "moto@gmail.com");
  const result = emp.getEmail();

  expect(result).toEqual(email);
});

test("getRole() should return \"Employee\"", () => {
  const role = "Employee";
  const emp = new Employee("Miyamoto", 2, "moto@gmail.com", "Miyamoto1584");

  expect(emp.getRole()).toBe(role);
});
