import {addPerson, getById, people} from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, {id}) => getById(id)
  },
  Mutation: {
    addPerson: (_, {name, age, gender}) => addPerson(name, age, gender)
  }
};

export default resolvers;
