const moons = [
  { name: "Luna", planet: "Earth", distanceFromPlanetInKm: 384400 },
  { name: "Deimos", planet: "Mars", distanceFromPlanetInKm: 23460 },
  { name: "Phobos", planet: "Mars", distanceFromPlanetInKm: 9380 },
  { name: "Ganymede", planet: "Jupiter", distanceFromPlanetInKm: 1070000 },
  { name: "Io", planet: "Jupiter", distanceFromPlanetInKm: 421600 },
  { name: "Europa", planet: "Jupiter", distanceFromPlanetInKm: 670900 },
];

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use object destructuring to assign the `name` and `planet` variables.

  You should not need to make any other changes to the code.
*/
const organizeMoonsByPlanet = (moons) => {
  const result = {};
  //result is an object

  for (let moon of moons) {
    const {name, planet} = moon
  //destructuring to define moon object as a name and planet
  //note: this is different from the moons object; the moons object includes the distanceFromPlanetInKm key while our new moon object will only concern planet and name of a moon. 

    if (result[planet]) {
      result[planet].push(name);
    //result is an object and planet is an array within that object
    //result[planet] creates a new variable key using the planet value from the moons key in the moons object

//??Why is planet an array of moons??

    } else {
      result[planet] = [name];
    }
  }
  return result;
}

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Use object destructuring and the rest operator to assign the `closest` and `rest` variables.

  You should not need to make any other changes to the code.
*/
const getClosestToPlanet = (moons) => {
//let closest = moons[0];
//const rest = moons.slice(1);

let [closest, ...rest] = moons;
// I had to use "let" instead of "const" here because the variable "closest" value will change as a result of the fxn


/* 
what's really cool here is that I used destructuring to define 2 variables at the same damn time (Future's voice)

rest is a variable name for an array that has the moons of the planets Jupiter and Mars

here the slice method creates a new array @ index #1 which is the 2nd object within the moons array.
*/

  for (let moon of rest) {
    if (moon.distanceFromPlanetInKm < closest.distanceFromPlanetInKm) {
      closest = moon;
    }
  }

  return closest.name;
}

/*
  To update this function, you should:
  - Change the function to use arrow syntax, while keeping the name of the function the same.
  - Set the default value of `distanceFromPlanetInKm` to "Unknown" as part of the function signature.
  - Use object shorthand to create the new object.

  You should not need to make any other changes to the code.
*/


const createMoon = (name, planet, distanceFromPlanetInKm = "Unknown") => {
  if (!name || !planet) {
    return "Name and planet are required.";
  } else {

/* 
distanceFromPlanetInKm = distanceFromPlanetInKm || "Unknown";
this code ^^^ is not needed anymore b/c I set a default value (string) within the param
*/


  return {
    name,
    planet,
    distanceFromPlanetInKm,
    };
//shorthand object construction
  }
}

/*
Object shorthand refers to a special syntax where instead of assigning a key-value pair explicitly, you do so by including a variable that has the same name as the key you want.


Notice in the above object there is no explicit value. JavaScript takes the name of the variable and sets it to be the key. It then sets the value stored inside of that variable to be the value. Object shorthand can shorten your code and save you time repeating names.
*/


module.exports = {
  organizeMoonsByPlanet,
  getClosestToPlanet,
  createMoon,
};
