/* Foundation Challenges */

export const getFurniturePrice = (furniture) => {
  const price = furniture.price;

  return price;
};

export const setFurnitureStoreLocation = (furniture, location) => {
  furniture.location = location;

  return furniture;
};

export const makeSpaceship = (
  name,
  noOfSeats,
  engineType,
  canTravelSolarSystems
) => {
  const spaceship = {
    name: name,
    noOfSeats: noOfSeats,
    engineType: engineType,
    canTravelSolarSystems: canTravelSolarSystems,
  };

  return spaceship;
};

/* Intermediate Challenges */

export const setUserName = (user, username) => {
  const hasUserName = user.hasOwnProperty("username");

  if (!hasUserName) {
    user.username = username;
  }

  return user;
};

export const splitFullNameToFirstAndLast = (customer) => {
  const fullName = customer.fullName;
  const splitNames = fullName.split(" ");
  const firstName = splitNames[0];
  const lastName = splitNames[1];

  customer.firstName = firstName;
  customer.lastName = lastName;

  return customer;
};

export const accessGivenKey = (object, key) => {
  const value = object[key];

  return value;
};

/* Advanced Challenges */

export const getUserAddress = (user) => {
  const address = `${user.address.line1} ${user.address.line2} ${user.address.city} ${user.address.postcode}`;

  return address;
};

export const setSafeAllergens = (customer, allergenList) => {
  const safeAllergens = allergenList.filter((allergen) => {
    return !customer.allergies.includes(allergen);
  });

  customer.safeAllergens = safeAllergens;

  return customer;
};

/* Expert Challenges */

export const mergeFurniture = (furnitureLocationData, furnitureProductData) => {
  return {
    ...furnitureLocationData,
    ...furnitureProductData,
  };
};

//// uncomment for solution using "for in" iterator
// export const mergeFurniture = (furnitureLocationData, furnitureProductData) => {
//   const mergeFurniture = {};

//   for (const key in furnitureLocationData) {
//     const element = furnitureLocationData[key];
//     mergeFurniture[key] = element;
//   }

//   for (const key in furnitureProductData) {
//     const element = furnitureProductData[key];
//     mergeFurniture[key] = element;
//   }

//   return mergeFurniture;
// };
