import { getMovies, getTitle } from './db';

const resolvers = {
  Query: {
    movies: (_) => getMovies(),
    movie: (_, { id }) => getTitle(id),
  },
};

export default resolvers;
