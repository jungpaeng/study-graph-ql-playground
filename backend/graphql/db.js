export const people = [
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

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);

  return filteredPeople[0];
};