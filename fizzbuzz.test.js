const {fizzbuzz} = require("./fizzbuzz")

test("fizz ", () => {
    expect(fizzbuzz(3)).toBe("Fizz")
})
test("Buzz ", () => {
    expect(fizzbuzz(5)).toBe("Buzz")
})
test("fizzbuzz ", () => {
    expect(fizzbuzz(15)).toBe("FizzBuzz")
})