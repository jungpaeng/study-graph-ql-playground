import {getMovie, getMovies} from "./db";

const resolvers = {
  Query: {
    movie: (_, {id}) => getMovie(id),
    movies: (_, {limit, rating}) => getMovies(limit, rating)
  }
};

export default resolvers;
