/* Foundation Challenges */

export const getEmployeeQuotes = (employeeArr) => {
  const employeeQuotes = employeeArr.map((employee) => {
    return employee.quote;
  });

  return employeeQuotes;
};

export const getTheManagers = (employeeArr) => {
  const managerArr = employeeArr.filter((employee) => {
    return employee.isManagement;
  });

  return managerArr;
};

export const getNumberOfKeys = (object) => {
  const keys = Object.keys(object);
  const numberOfKeys = keys.length;

  return numberOfKeys;
};

/* Intermediate Challenges */

export const findMostExpensiveItem = (shoppingBasketArr) => {
  const sortedArray = shoppingBasketArr.sort((a, b) => b.price - a.price);

  return sortedArray[0];
};

export const setTotalPrice = (shoppingBasketArr) => {
  const shoppingBasketWithTotals = shoppingBasketArr.map((item) => {
    const newItem = { ...item };
    const totalPrice = newItem.price * newItem.quantity;
    newItem.totalPrice = totalPrice;
    return newItem;
  });

  return shoppingBasketWithTotals;
};

export const totalShoppingBasket = (shoppingBasketArr) => {
  const total = shoppingBasketArr.reduce((previous, current) => {
    return previous + current.totalPrice;
  }, 0);

  return total;
};

/* Advanced Challenges */

export const getImportantKeys = (mealsArr) => {
  const cleanedMealArr = mealsArr.map((meal) => {
    const newMeal = {
      id: meal.id,
      name: meal.name,
      ingredients: meal.ingredients,
      country: meal.country,
    };
    return newMeal;
  });

  return cleanedMealArr;
};

export const setImportantKeys = (mealsArr) => {
  const cleanedMealsArr = mealsArr.map((meal) => {
    const newMeal = { ...meal };
    if (!newMeal.hasOwnProperty("isVegetarian")) {
      newMeal.isVegetarian = false;
    }

    if (!newMeal.hasOwnProperty("timeToCook")) {
      newMeal.timeToCook = 15;
    }

    return newMeal;
  });

  return cleanedMealsArr;
};

/* Expert Challenges */

export const cleanCocktailResponseData = (cocktailData) => {
  const cleanCocktailData = cocktailData.map((cocktail) => {
    const cleanCocktail = {};
    cleanCocktail.id = cocktail.idDrink;
    cleanCocktail.drink = cocktail.strDrink;
    cleanCocktail.category = cocktail.strCategory;
    cleanCocktail.alcoholic = cocktail.strAlcoholic;
    cleanCocktail.instructions = cocktail.strInstructions;
    cleanCocktail.ingredients = [];

    for (const key in cocktail) {
      const element = cocktail[key];
      if (key.includes("strIngredient") && element) {
        cleanCocktail.ingredients.push(element);
      }
    }

    return cleanCocktail;
  });

  return cleanCocktailData;
};
