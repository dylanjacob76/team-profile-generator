// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const github = "Miyamoto1584";
  const engineer = new Engineer("Miyamoto", 2, "moto@gmail.com", "Miyamoto1584");

  expect(engineer.github).toBe(github)
});

test("getRole() should return \"Engineer\"", () => {
  const role = "Engineer";
  const engineer = new Engineer("Luffy", 12, "kop@gmail.com");

  expect(engineer.getRole()).toBe(role);
});

test("Can get GitHub username via getGithub()", () => {
  const github = "miyamoto85";
  const engineer = new Engineer();
  const result = engineer.getGithub(github);

  expect(result).toBe(github);
});
