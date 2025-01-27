/* Foundation Challenges */

export const totalScoresArr = (scoresArr) => {
  const totalScore = scoresArr.reduce(
    (total, current) => (total += current),
    0
  );

  return totalScore;
};

export const reverseString = (toReverse) => {
  const stringArray = toReverse.split("");
  const stringReversed = stringArray.reverse();
  const stringJoined = stringReversed.join("");

  return stringJoined;
};

export const sortCharactersAlphabetically = (characterArr) => {
  const lowerCaseChar = characterArr.map((character) =>
    character.toLowerCase()
  );

  const sortedChar = lowerCaseChar.sort();

  return sortedChar;
};

/* Intermediate Challenges */

export const sortNumbersHighToLow = (numberArr) => {
  const sortedNumbers = [...numberArr].sort((a, b) => {
    return b - a;
  });
  return sortedNumbers;
};

export const checkItemInStock = (toCheck) => {
  const stockList = [
    "apple",
    "banana",
    "orange",
    "coconut",
    "strawberry",
    "lime",
    "grapefruit",
    "lemon",
    "kumquat",
    "blueberry",
    "melon",
  ];

  const index = stockList.indexOf(toCheck);

  let message = `Sorry ${toCheck} is not in stock.`;

  if (index >= 0) {
    message = `${toCheck} is in stock, it is on aisle ${index}.`;
  }

  return message;
};

export const checkPrimaryColours = (coloursArr) => {
  const primaryColours = ["red", "blue", "yellow"];
  const colourCheck = coloursArr.every((colour) =>
    primaryColours.includes(colour)
  );
  return colourCheck;
};

/* Advanced Challenges */

export const checkStringPalindrome = (stringOne) => {
  const reversedString = reverseString(stringOne);
  const checkPalindrome = reversedString === stringOne;
  return checkPalindrome;
};

export const totalNestedScoresArr = (scoresArr) => {
  const score = scoresArr.map(totalScoresArr);

  return score;
};

/* Expert Challenges */

export const encryptString = (toEncrypt) => {
  const encrypted = toEncrypt
    .split("")
    .reduce(
      (total, current, index) => {
        const remainder = index % 3;
        total[remainder].push(current);
        return total;
      },
      [[], [], []]
    )
    .flat()
    .join("");

  return encrypted;
};
