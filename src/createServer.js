/*
  Creates GraphQL-Yoga server (Express server, sits on top of apollo server)

  GraphQL-Yoga packs express + apollo
*/

const { GraphQLServer } = require('graphql-yoga')

// Resolvers: (To expose endpoints)
// Push data resolver
const Mutation = require('./resolvers/Mutation')
// Pull data resolver
const Query = require('./resolvers/Query')
const db = require('./db')

// Create the GraphQL Yoga server
function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db }),
  })
}

module.exports = createServer
