// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const school = "UNCC";
  const intern = new Intern("Clark", 23, "ck@gmail.com", "UNCC");

  expect(intern.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
  const role = "Intern";
  const intern = new Intern("Clark", 23, "ck@gmail.com", "UNCC");

  expect(intern.getRole()).toBe(role);
});

test("Can get school via getSchool()", () => {
  const school = "UNCC";
  const intern = new Intern("Clark", 23, "ck@gmail.com", "UNCC");
  const result = intern.getSchool();

  expect(result).toBe(school);
});
