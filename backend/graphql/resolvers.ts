const userMap = {
  name: "Yongbeen",
  age: 20,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => userMap
  }
};

export default resolvers;
