const moveZeros = require("./moveZeros");

describe("moveZeros", () => {
  test("it retuns an array", () => {
    expect(moveZeros([1, 2])).toEqual([1, 2]);
  });

  test("it pushes a 0 to the end of the array", () => {
    expect(moveZeros([1, 0, 2])).toEqual([1, 2, 0]);
  });
});
