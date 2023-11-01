import Person from "./person"

it("teste", () => {
  const person = new Person()
  expect(2 + 2).toBe(4)
  expect(person.sayName()).toBe("LcDev!")
})
