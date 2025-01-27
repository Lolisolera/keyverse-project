/* Foundation Challenges */

export const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getNames = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.map((item) => item.name);
};

export const getEmployedPeople = async (url) => {
  const response = await fetch(url);
  const people = await response.json();
  return people.filter((person) => person.isEmployed);
};

/* Intermediate Challenges */

export const findPersonWithId = async (url, id) => {
  const response = await fetch(url);
  const people = await response.json();
  const foundPerson = people.find((person) => person.id === id);
  return foundPerson ? foundPerson : "Person not found";
};

export const getPeopleWithMatchingInterests = async (url, interest) => {
  const response = await fetch(url);
  const people = await response.json();
  const peopleWithMatchingInterests = people.filter((person) => {
    return person.interests.includes(interest);
  });
  return peopleWithMatchingInterests.length
    ? peopleWithMatchingInterests
    : "No people with interest found";
};

/* Advanced Challenges */

export const setDescriptions = async (url) => {
  const response = await fetch(url);
  const people = await response.json();
  const peopleWithDescriptions = people.map((person) => {
    const newPerson = { ...person };
    const interests = newPerson.interests.reduce(
      (previous, current, index, arr) => {
        if (index === arr.length - 1) {
          return previous + ` and ${current}`;
        }

        if (index === 0) {
          return previous + current;
        }

        return previous + `, ${current}`;
      },
      ""
    );

    const description = `My name is ${newPerson.name}, I am ${
      newPerson.age
    } years old and ${newPerson.height}cm tall. I enjoy ${interests}. ${
      newPerson.isEmployed
        ? "I am currently employed"
        : "I am not currently employed"
    }`;

    newPerson.description = description;
    return newPerson;
  });
  return peopleWithDescriptions;
};

/* Expert Challenges */

export const setInterestDetails = async (peopleUrl, interestsUrl) => {
  const response = await fetch(peopleUrl);
  const people = await response.json();
  const response_1 = await fetch(interestsUrl);
  const interests = await response_1.json();
  const peopleWithComplexInterests = people.map((person) => {
    const newPerson = { ...person };

    const newInterests = newPerson.interests.map((personsInterest) => {
      return interests.find(
        (interest) => interest.interest === personsInterest
      );
    });

    newPerson.interests = newInterests;
    return newPerson;
  });
  return peopleWithComplexInterests;
};
