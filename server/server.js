import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers,
});

const options = {
  port: 4000,
};

server.start(options, ({ port }) =>
  console.log(`GraphQL Server started on port ${port}!`)
);
