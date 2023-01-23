const {
  organizeMoonsByPlanet,
  getClosestToPlanet,
  createMoon,
} = require("../");

const moons = [
  { name: "Luna", planet: "Earth", distanceFromPlanetInKm: 384400 },
  { name: "Deimos", planet: "Mars", distanceFromPlanetInKm: 23460 },
  { name: "Phobos", planet: "Mars", distanceFromPlanetInKm: 9380 },
  { name: "Ganymede", planet: "Jupiter", distanceFromPlanetInKm: 1070000 },
  { name: "Io", planet: "Jupiter", distanceFromPlanetInKm: 421600 },
  { name: "Europa", planet: "Jupiter", distanceFromPlanetInKm: 670900 },
];

describe("organizeMoonsByPlanet()", () => {
  test("should organize the moons by the name of the planet", () => {
    const actual = organizeMoonsByPlanet(moons);
    const expected = {
      Earth: ["Luna"],
      Mars: ["Deimos", "Phobos"],
      Jupiter: ["Ganymede", "Io", "Europa"],
    };
    expect(actual).toEqual(expected);
  });

  test("should not use the `function` keyword", () => {
    const actual = organizeMoonsByPlanet.toString();
    expect(actual.includes("function")).toEqual(false);
  });

  test("should destructure the `name` and `planet` variables", () => {
    const actual = organizeMoonsByPlanet.toString();

    // Uses the `name` variable.
    expect(actual.includes("name")).toEqual(true);
    expect(actual.includes("result[planet].push(name)")).toEqual(true);

    // Uses the `planet` variable.
    expect(actual.includes("planet")).toEqual(true);
    expect(actual.includes("result[planet] = [name]")).toEqual(true);

    // Uses destructuring for `name` variable.
    expect(actual.match(/\{.*name.*\}.*\=/s)).toBeTruthy();
    expect(actual.match(/\{.*moon.name.*\}.*\=/s)).not.toBeTruthy();

    // Uses destructuring for `planet` variable.
    expect(actual.match(/\{.*planet.*\}.*\=/s)).toBeTruthy();
    expect(actual.match(/\{.*moon.planet.*\}.*\=/s)).not.toBeTruthy();
  });
});

describe("getClosestToPlanet()", () => {
  test("should return the moon closest to its planet", () => {
    const actual = getClosestToPlanet(moons);
    const expected = "Phobos";
    expect(actual).toEqual(expected);
  });

  test("should not use the `function` keyword", () => {
    const actual = getClosestToPlanet.toString();
    expect(actual.includes("function")).toEqual(false);
  });

  test("should destructure the input with the rest syntax", () => {
    const actual = getClosestToPlanet.toString();

    // Uses the `closest` variable.
    expect(actual.includes("closest")).toEqual(true);
    expect(actual.includes("closest = moon")).toEqual(true);

    // Uses the `rest` variable.
    expect(actual.includes("rest")).toEqual(true);
    expect(actual.includes("for (let moon of rest) {")).toEqual(true);

    // Uses destructuring for `closest` variable.
    expect(actual.match(/\[.*closest.*\].*/s)).toBeTruthy();

    // Uses the rest syntax for `rest` variable.
    expect(actual.match(/\[.*\.\.\.rest.*\].*\=/s)).toBeTruthy();
  });
});

describe("createMoon()", () => {
  test("should return a new moon object based off of the inputs", () => {
    const actual = createMoon("Umbriel", "Uranus", 265970);
    const expected = {
      name: "Umbriel",
      planet: "Uranus",
      distanceFromPlanetInKm: 265970,
    };

    expect(actual).toEqual(expected);
  });

  test("should return an error string if `name` or `planet` are missing", () => {
    const expected = "Name and planet are required.";

    expect(createMoon()).toEqual(expected);
    expect(createMoon("Umbriel")).toEqual(expected);
    expect(createMoon(null, "Uranus")).toEqual(expected);
    expect(createMoon(null, null)).toEqual(expected);
  });

  test("should set a default of 'Unknown' for distance to `distanceFromPlanetInKm` if the value is not entered", () => {
    const actual = createMoon("Umbriel", "Uranus");
    const expected = {
      name: "Umbriel",
      planet: "Uranus",
      distanceFromPlanetInKm: "Unknown",
    };

    expect(actual).toEqual(expected);
  });

  test("should not use the `function` keyword", () => {
    const actual = createMoon.toString();
    expect(actual.includes("function")).toEqual(false);
  });

  test("should set a default for `distanceFromPlanetInKm` to `Unknown`", () => {
    const actual = createMoon.toString();
    expect(
      actual.match(/\(.*distanceFromPlanetInKm.*\=.*\"Unknown\".*\)/s)
    ).toBeTruthy();
  });

  test("should use object shorthand to construct the new object", () => {
    const actual = createMoon.toString();
    expect(actual.match(/name:/s)).not.toBeTruthy();
    expect(actual.match(/planet:/s)).not.toBeTruthy();
    expect(actual.match(/distanceFromPlanetInKm:/s)).not.toBeTruthy();
  });
});
