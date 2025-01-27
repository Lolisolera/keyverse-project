/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are separated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
export const getEmployeeQuotes = (employeeArr: Employee[]): string[] => {
  return employeeArr.map(employee => employee.quote);//The map method  iterate over the array of employees 
  //and for each employee object in the array we extract the quote property.
  //then, MAP map returns a new array containing the quote from each employee object.
};





/**
 * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
 */
export const getTheManagers = (employeeArr: Employee[]): Manager[] => {

  return employeeArr.filter(employee => employee.isManagement) as Manager[];// Filter the array to only include employees who are managers
  // The result of the filter method is asserted as Manager[] because all filtered employees have isManagement: true.
  //employeeArr: Employee[] are the parameters of the function, which is an array of employee objects
  //The type Employee[] indicates that employeeArr is an array where each element follows the Employee interface/type.
  // Manager is the return type of the function.The function will return an array of Manager objects.
  // Each Manager is a specialized form of Employee, as defined by the Manager type.

  //The Employee INTERFACE defines the shape or structure of an object that represents an employee.
  // In TypeScript, an interface is a way to specify the required properties and their types for objects, ensuring consistent structure and type safety.
  //e.g: 
  /*interface Employee {
    name: string;           // The employee's name
    quote: string;          // A quote attributed to the employee
    yearsEmployed: number;  // The number of years the employee has worked at the company
    isManagement: boolean;  // A boolean indicating if the employee is in a management role
  }*/

};





/**
 * A function which tells you the number of keys on the provided object.
 *
 * @param {object} object - The provided object with an assortment of keys
 * @returns {number} The number of the keys on the object
 */
export const getNumberOfKeys = (object: object): number => {
  return Object.keys(object).length;
};

//use the function example:
const person = {
  name: "John",
  age: 25,
  profession: "Engineer",
};

console.log(getNumberOfKeys(person)); // Output: 3






/* Intermediate Challenges */

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */
export const findMostExpensiveItem = (shoppingBasketArr: Product[]): Product => {
  const defaultProduct = { name: "", price: -1, hasFreeShipping: false, quantity: -1 };
  // "" is a placeholder and doesn't have a value yet. -1 indicate an invalid price because prices are never negative. 
  //has free shipping:false indicates that is not free shipping by default.
  //quantity -1 is a placeholder to indicate no vlaid quantity is associated with this product.
  if (shoppingBasketArr.length === 0) {
    return defaultProduct;
  }

  // Use the reduce method to find the most expensive item
  const mostExpensiveItem = shoppingBasketArr.reduce((prev, current) =>//The reduce function is used to process an array and accumulate a single result based on a callback function.
    //prev is the previous most expensive value.
    //current item being iterated over in the shoppingBasketArr array.
    current.price > prev.price ? current : prev //this is the callback function and is executed for every single item
    //if current price is greater than previous Price, them current becomes the most expensive item.
    //otherwise, keep prev as the most expensive item.
  );

  return mostExpensiveItem;
};

// Example usage:
const shoppingBasket: Product[] = [
  { name: "Laptop", price: 1200, hasFreeShipping: true, quantity: 1 },
  { name: "Headphones", price: 200, hasFreeShipping: true, quantity: 2 },
  { name: "Keyboard", price: 50, hasFreeShipping: false, quantity: 1 },
];

console.log(findMostExpensiveItem(shoppingBasket));





/**
 * A function which adds a new key of totalPrice to each shopping basket item in the array where total cost is
 * the price * the quantity of items ordered i.e.
 *
 * {
 *  name: "jeans",
 *  price: 30,
 *  hasFreeShipping: false,
 *  quantity: 2,
 *  totalPrice: 60
 * }
 *
 * Then returns a new array of objects
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
 */
export const setTotalPrice = (shoppingBasketArr: Product[]): CompleteProduct[] => {//product interface and completeProduct interface
  return shoppingBasketArr.map(item => ({//map creates a new array with transformed items from the original array.
    ...item,//for each item a new object is returned using the spread operator to copy existing properties.
    totalPrice: item.price * item.quantity, // Calculate total price and add to each object
  }));
};





/**
 * A function which sums the total cost of every item in the array and returns it as a single number.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {number} The total cost of the order
 */
export const totalShoppingBasket = (shoppingBasketArr: CompleteProduct[]): number => {
  return shoppingBasketArr.reduce((total, item) => total + item.totalPrice, 0);
  //The reduce method iterates through the array, accumulating the sum of totalPrice for all items in the array.
  //The total is initialized to 0, which is the starting value for the accumulation.
  //Each item's totalPrice is added to the running total to compute the final sum.
};






/* Advanced Challenges */

/**
 * A function which takes an array of meal objects, removes unneeded keys from the objects and returns a new array of
 * meal objects.
 *
 * The unneeded keys are "timeStamp" and "userCreated"
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
 */
export const getImportantKeys = (mealsArr: LargeMeal[]): LeanMeal[] => {//original array: new array version
  return mealsArr.map(({ id, name, ingredients, country }) => ({//map method returns a new array with the selected items
    id,
    name,
    ingredients,
    country,
  }));
};//the ORIGINAL array reminas unchanged.







/**
 * A function which takes an array of meal objects and check if every object contains the necessary keys. If a key is
 * missing it adds a default value instead.
 *
 * Necessary keys and their default values:
 * - isVegetarian = false
 * - timeToCook = 15
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, isVegetarian?: boolean, timeToCook?: number}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string, isVegetarian: boolean, timeToCook: number}[]}
 */
export const setImportantKeys = (mealsArr: OptionalMeal[]): MandatoryMeal[] => {//OptionalMeal[]where isVegetarian and timeToCook are optional.
  return mealsArr.map((meal) => ({//map iterates over the array and ensure each meal object contains the necessary keys with the default values if they're missing.
    ...meal,//the spread operator copies all existing properties of the meal object into the new object, ensuring the rest of the data remains intact.
    isVegetarian: meal.isVegetarian ?? false, // Set default to false if undefined
    //If meal.isVegetarian is null or undefined, it assigns false.
    timeToCook: meal.timeToCook ?? 15,       // Set default to 15 if undefined
    //If meal.timeToCook is null or undefined, it assigns 15.
  }));
};// the ?? is used to specifically check for for null or undefined.
//the || is used to check for any falsy value (e.g., null, undefined, 0, false, "")






/* Expert Challenges */

/**
 * A function that takes a raw response from a cocktail API and turns each object within the response array into a cleaner form
 * so that it is easier to work with.
 *
 * Returns an array of these cleaned "cocktail" objects
 *
 * @param {{
 *  idDrink: number,
 *  strDrink: string,
 *  strCategory: string,
 *  strAlcoholic: string,
 *  strInstructions: string,
 *  strIngredient1: string | null,
 *  strIngredient2: string | null,
 *  strIngredient3: string | null,
 *  strIngredient4: string | null,
 *  strIngredient5: string | null,
 *  strIngredient6: string | null
 * }[]} cocktailData - The raw response from the cocktail API
 * @returns {{
 *  id: number,
 *  drink: string,
 *  category: string,
 *  alcoholic: string,
 *  instructions: string,
 *  ingredients: string[],
 * }[]} A Cleaned array of cocktail data
 */
export const cleanCocktailResponseData = (cocktailData: CocktailResponse[]): Cocktail[] => {
  return cocktailData.map(cocktail => {
    // Extract and filter ingredients to remove null values
    const ingredients = [
      cocktail.strIngredient1,
      cocktail.strIngredient2,
      cocktail.strIngredient3,
      cocktail.strIngredient4,
      cocktail.strIngredient5,
      cocktail.strIngredient6,
    ].filter((ingredient): ingredient is string => ingredient !== null); // Type guard to ensure non-null strings
    // the filter method excludes null values ffrom the ingredients list.

    //Each CocktailResponse object is transformed into a Cocktail object with the desired properties and format.
    // Map the raw cocktail to the cleaned format
    return {
      id: cocktail.idDrink,
      drink: cocktail.strDrink,
      category: cocktail.strCategory,
      alcoholic: cocktail.strAlcoholic,
      instructions: cocktail.strInstructions,
      ingredients,
    };
  });
};
