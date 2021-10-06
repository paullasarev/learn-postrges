import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [],
});

const server = new ApolloServer({ gateway });

server.listen().then(({ url }) => {
  console.log(`Server ready at url: ${url}`);
});