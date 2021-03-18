import {
  sumForEach,
  fullNameForEach,
  fullNameMap,
  filterByEven,
  filterByAccepted,
  sumReduce,
  reduceArrayToObject,
} from "./javascript-recap-exercises";

describe("1. Exercise: Counting with Array.forEach()", () => {
  it("given [1,2,3] it should return 6", () => {
    const fixture = [1, 2, 3];

    expect(sumForEach(fixture)).toEqual(6);
  });

  it("given [5, 6, 3, 7, -1, 10, 12] it should return 42", () => {
    const fixture = [5, 6, 3, 7, -1, 10, 12];

    expect(sumForEach(fixture)).toEqual(42);
  });
});

describe("2. Exercise: Returning a new array with Array.forEach()", () => {
  it("given an array of employees with firstName and lastName it should return a new array with full name", () => {
    const fixture = [
      { firstName: "Luke", lastName: "Skywalker" },
      { firstName: "Ahsoka", lastName: "Tano" },
    ];

    expect(fullNameForEach(fixture)).toEqual(["Luke Skywalker", "Ahsoka Tano"]);
  });
});

describe("3. Exercise: Returning a new array with Array.map()", () => {
  it("given an array of employees with firstName and lastName it should return a new array with full name", () => {
    const fixture = [
      { firstName: "Luke", lastName: "Skywalker" },
      { firstName: "Ahsoka", lastName: "Tano" },
    ];

    expect(fullNameMap(fixture)).toEqual(["Luke Skywalker", "Ahsoka Tano"]);
  });
});

describe("4. Exercise: Filter an array with numbers using Array.filter()", () => {
  it("given an array with numbers it should return only even numbers", () => {
    const fixture = [1, 2, 3, 4, 5, 6];

    expect(filterByEven(fixture)).toEqual([2, 4, 6]);
  });
});

describe("5. Exercise: Filter an array with objects using Array.filter()", () => {
  it("given an array with objects containing status it should return only 'accepted' ones", () => {
    const fixture = [
      { name: "Alice", status: "invited" },
      { name: "Bob", status: "invited" },
      { name: "Carol", status: "accepted" },
      { name: "Dan", status: "rejected" },
    ];

    expect(filterByAccepted(fixture)).toEqual([
      { name: "Carol", status: "accepted" },
    ]);
  });
});

describe("6. Exercise: Counting using Array.useReduce()", () => {
  it("given [1,2,3] it should return 6", () => {
    const fixture = [1, 2, 3];

    expect(sumReduce(fixture)).toEqual(6);
  });

  it("given [5, 6, 3, 7, -1, 10, 12] it should return 42", () => {
    const fixture = [5, 6, 3, 7, -1, 10, 12];

    expect(sumReduce(fixture)).toEqual(42);
  });
});

describe("7. Exercise: Transforming using Array.useReduce()", () => {
  it("given an array with object ids it should return a new object with id keys", () => {
    const fixture = [
      { name: "Alice", id: 3 },
      { name: "Bob", id: 7 },
    ];

    expect(reduceArrayToObject(fixture)).toEqual({
      3: { name: "Alice", id: 3 },
      7: { name: "Bob", id: 7 },
    });
  });
});
