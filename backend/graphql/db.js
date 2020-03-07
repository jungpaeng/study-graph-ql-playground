let people = [
  {
    id: 0,
    name: 'Person A',
    age: 18,
    gender: 'male'
  },
  {
    id: 1,
    name: 'Person B',
    age: 18,
    gender: 'female'
  },
];

export const getPeople = () => people;

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);

  return filteredPeople[0];
};

export const deletePerson = (id) => {
  const cleanPeople = people.filter(person => person.id !== id);

  if (people.length > cleanPeople.length) {
    people = cleanPeople;
    return true;
  } else {
    return false;
  }
};

export const addPerson = (name, age, gender) => {
  const newPerson = {
    id: people.length + 1,
    name,
    age,
    gender,
  };

  people.push(newPerson);

  return newPerson;
};