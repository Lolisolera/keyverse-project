/* Foundation Challenges */

export const removeFalseValues = (booleanArr) => {
  const trueValues = booleanArr.filter((boolean) => boolean);
  return trueValues;
};

export const createPercentageList = (numbersArr) => {
  const percentageList = numbersArr.map((number) => `${number * 100}%`);
  return percentageList;
};

export const createListOfPossessions = (possessionsArr, name) => {
  const possessionList = possessionsArr.map(
    (possession) => name + " " + possession
  );
  return possessionList;
};

/* Intermediate Challenges */

export const convertStringToNumbersArray = (numberString) => {
  const numberArray = numberString.split("+").map((number) => Number(number));
  return numberArray;
};

export const createOddEvenArray = (numberString) => {
  const numberArray = convertStringToNumbersArray(numberString);
  const oddEvenArray = numberArray.map((number) =>
    number % 2 === 0 ? "even" : "odd"
  );
  return oddEvenArray;
};

export const filterBooksBySearch = (booksArr, searchTerm) => {
  const searchResult = booksArr.filter((book) => book.includes(searchTerm));
  return searchResult;
};

/* Advanced Challenges */

export const formatStringArray = (stringArr) => {
  const cleanedArr = stringArr.map((string) => {
    const cleanStr = string.trim().toLowerCase();
    return cleanStr;
  });

  const joinedString = cleanedArr.join("+");

  return joinedString;
};

export const formatString = (string) => {
  const cleanStr = string.replace(/[^\w]|[\s\d]/gi, "");
  const formatString = cleanStr
    .split("")
    .map((letter, index) =>
      index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
    );
  return formatString;
};

/* Expert Challenges */

export const fizzBuzz = (mixedArray = []) => {
  const positiveNumberArray = mixedArray.filter(
    (item) => item > 0 && Number(item)
  );

  const fizzBuzz = positiveNumberArray.map((number) => {
    let string = "";

    if (!(number % 3)) string += "Fizz";
    if (!(number % 5)) string += "Buzz";

    return string || number.toString();
  });

  return fizzBuzz;
};
