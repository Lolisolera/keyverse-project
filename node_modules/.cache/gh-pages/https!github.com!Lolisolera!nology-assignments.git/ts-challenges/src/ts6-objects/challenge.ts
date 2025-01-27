/* These challenges build upon previous knowledge and introduces the use of objects */

/* 
  All challenges in this repository are separated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function that takes a furniture object from the catalogue and returns its price
 *
 * furniture = {          //furnitue OBJECT
 *  name: "lack",
 *  price: 6
 * }
 *
 * @param {{name: string, price: number}} furniture - A piece of furniture from the catalogue
 * @return {number} The price of the piece of furniture
 */
export const getFurniturePrice = (furniture: Furniture): number => {
  //Furniture interface Defines the structure of a Furniture object with two properties: name and price
  //getFurniturePrice Function:Takes a Furniture object as input.

  return furniture.price; //Returns the value of the price property from the object
};//The function accesses the price property of the provided Furniture object and returns it directly.

//Using an interface (E.g. FURNITURE)ensures type safety and validates that the object has the required properties.





/**
 * A function to attach a store location to a furniture object from the catalogue
 *
 * @param {{name: string, price: number}} furniture - A piece of furniture from the catalogue
 * @param {string} location - A store location to attach to a piece of furniture
 * @returns {{name: string, price: number, location: string}} furniture - A furniture object from the catalogue with a name, price and location.
 */
export const setFurnitureStoreLocation = (furniture: Furniture, location: string): CompleteFurniture => {
  //Furniture: A custom type (or interface) representing a furniture item {name: string, price: number}
  //CompleteFurniture: Another custom type (or interface) which represents the enhanced furniture object with the additional location property.

  const completeFurniture = { price: furniture.price, name: furniture.name, location: location };
  //completeFurniture is a new OBJECT that extracts the name and price properties from the furniture object passed into the function
  //and adds the location property passed as a string.
  return completeFurniture;
  //returns the new object with name, price and location added to it.
};




/**
 * A function which takes a selection of arguments relating to a space ship and uses them
 * to create a space ship object
 *
 * @param {string} name The name of the space ship
 * @param {number} noOfSeats The number of seats of the space ship
 * @param {string} engineType The type of engine in the space ship
 * @param {boolean} canTravelSolarSystems The ability for the space ship to travel to different solar systems
 * @returns {{name: string, noOfSeats: number, engineType: string, canTravelSolarSystems: boolean}} spaceship - The space ship object
 */
export const makeSpaceship = (
  name: string,
  noOfSeats: number,
  engineType: string,
  canTravelSolarSystems: boolean

): SpaceShip => { // new spaceship object using the provided arguments
  const spaceship = {
    name: name,
    noOfSeats: noOfSeats,
    engineType: engineType,
    canTravelSolarSystems: canTravelSolarSystems
  };

  return spaceship;  //new created object 
};






/* Intermediate Challenges */

/**
 * A function that will attach a username to a user but only if the user doesn't already have one
 *
 * @param {{name: string, username?: string}} user - A user object
 * @param {string} username - A username to attach
 * @returns {{name: string, username: string}} User - The user object with the same username or a new one
 */
export const setUserName = (user: User, username: string): CompleteUser => {

  //interface User {name: string, username?} : interface CompleteUser {name: string, username}- username is required!
  //if the user already has a username, return the user object otherwise, retun the new COmpleteUser object

  const hasUserName = user.hasOwnProperty("username");//.hasOwnProperty is a method that checks if an object has a specific property as its own property, rather than inheriting it from its prototype chain.

  if (!hasUserName) {
    user.username = username;
  }

  return user as CompleteUser;
};






/**
 * A function which takes a customer object from the database and returns the same object where the name has been
 * split into first and last name and reattached to the object
 *
 * @param {{fullName: string}} customer A customer object from the database
 * @returns {{fullName: string, firstName: string, lastName: string}} A customer object from the database with the name separated into first and last
 */
export const splitFullNameToFirstAndLast = (customer: Customer): CompleteCustomer => {
  //customer: Customer is the parameter. 
  //The customer is an object of type Customer which is expected to have at least a fullName property.
  //: CompleteCustomer: is the return type of the function.
  //The function is expected to return an object of type CompleteCustomer, which contains fullName, firstName, and lastName.
  const fullName = customer.fullName;//extracts the fullName from the customer object
  const splitNames = fullName.split(" ");//The split(" ") method is called on the fullName string.
  //This splits the string into an array using the space character as a delimiter
  //e.g "Alice Smith" would become the array ["Alice", "Smith"].
  //splitNames now holds the array of parts from the fullName.
  const firstName = splitNames[0];//The first element of the splitNames array is assumed to be the first name
  const lastName = splitNames[1];//the second element of the splitNames array is assumed to be the last name

  const newCustomer = { fullName: fullName, firstName: firstName, lastName: lastName };
  //newCustomer is a new object with these 3 properties:
  //fullmName with the original full anme of the customer
  //firstName: The extracted first name
  //lastName: The extracted last name
  return newCustomer;//return of the newCustomer Object which contin the 3 properties
};





/**
 * A function which accesses a given key on an object
 *
 * HELPFUL RESOURCE: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
 *
 * @param {object} object An object with some key value pairs (Not important what they are)
 * @param {string} key The name of a key to access on the object
 * @returns {any} value - The value you have accessed on the object
 */
export const accessGivenKey = (object: any, key: string): any => {
  return object[key]; //key is a string it is used to retrieve the value associated with that property from the object
}; //Bracket notation allows the key to be a variable, unlike dot notation (e.g., object.key), which requires a fixed property name.

//EXPLAINED: e.g.if object = { name: "Alice", age: 25 } and key = "name", then object[key] would return "Alice".
//If the key doesn't exist in the object, it will return undefined.
//in this challenge, the key could be of any data type!






/* Advanced Challenges */

/**
 * A function which takes a user object as an argument, and returns its address as a string to print onto a shipping label
 * "4 Privet Drive Little Whinging Surrey CR3 0AA"
 *
 * @param {{id: number, name: string, address: {line1: string, line2: string, city: string, postcode: string}}} user - A user object from the database
 * @returns {string} An address string for a shipping label
 */
export const getUserAddress = (user: ShippingUser): string => {
  const { line1, line2, city, postcode } = user.address;//DESTRUCTURING to extract the line1, line2, city, and postcode properties from the user.address object.
  return `${line1} ${line2} ${city} ${postcode}`;//template literals whcih concatenate the address components into a single string.
};

//use the fucntion (example):
const user: ShippingUser = {
  id: 1,
  name: "Lola Marquez",
  address: {
    line1: "9 Pilgrims Close",
    line2: "Barnet",
    city: "London",
    postcode: "N2 0AA"
  }
};

// Get the address for shipping label
const shippingLabel = getUserAddress(user);
console.log(shippingLabel); // Output: "9 Pilgrims Close Barnet London N2 0AA"






/**
 * A function that given a customer for the restaurant with a list of known allergies, and a list of allergens in an
 * array, will attach an array of allergens safe for the customer to eat to the customer object and return it
 *
 * @param {{id: number, name: string, allergies: string[]}} customer - A customer for the restaurant
 * @param {string[]} allergenList - A list of all known allergens
 * @return {{id: number, name: string, allergies: string[], safeAllergens: string[]}} customer
 */
export const setSafeAllergens = (customer: RestaurantCustomer, allergenList: string[]): CompleteRestaurantCustomer => {
  //step 1 - Create an array of allergens that are safe for the customer (those not in the customer's allergies list)
  const safeAllergens = allergenList.filter(allergen => !customer.allergies.includes(allergen));
  //the FILTER method creates a new array with new allergens that there are not in the original allergenList array.
  // the INCLUDES method checks if each allergen is present in the customer's list of allergies
  //If the allergen is not in the list, it's considered safe and is included in safeAllergens.

  return { ...customer, safeAllergens };//new customer object with the additional safeAllergens array
};//the SPREAD OPERATOR creates a new object by copying all properties from the original customer object
//and then it adds or updates the safeAllergens property with the filtered list.

// the RETURN object is of type CompleteRestaurantCustomer, which includes the safeAllergens array alongside the existing properties (id, name, allergies). 


//example of USAGE:
// Define the types
interface RestaurantCustomer {
  id: number;
  name: string;
  allergies: string[];
}

interface CompleteRestaurantCustomer extends RestaurantCustomer {//interface is used to define the shape or structure of an object. It specifies what properties an object must have and their respective types.
  safeAllergens: string[]; //The extends keyword is used to inherit properties from another interface or class.
}

// Example customer
const customer: RestaurantCustomer = {
  id: 1,
  name: "John Doe",
  allergies: ["peanuts", "shellfish"]
};

// List of all known allergens
const allergenList = ["peanuts", "shellfish", "milk", "eggs", "wheat"];

// Get the customer with safe allergens attached
const updatedCustomer = setSafeAllergens(customer, allergenList);

console.log(updatedCustomer);







/* Expert Challenges */

/**
 * A function which takes two objects which hold different information about the same piece of furniture, merges them
 * and returns it. You should do this WITHOUT modifying the original pieces of data
 *
 * @param {{id: number, location: string, sku: string}} furnitureLocationData - All of the data about the furniture's location in the store
 * @param {{id: number, name: string, price: number, isAvailable: boolean}} furnitureProductData - All of the data about the furniture product
 * @returns {{id: number, location: string, sku: string, name: string, price: number, isAvailable: boolean}}
 */
export const mergeFurniture = (
  furnitureLocationData: FurnitureLocationData,
  furnitureProductData: FurnitureProductData
): FurnitureData => {

  // Merge the two objects using the spread operator
  return { ...furnitureLocationData, ...furnitureProductData };
};
