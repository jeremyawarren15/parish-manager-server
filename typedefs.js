const { gql } = require("apollo-server");

const typeDefs = gql`
  type Hour {
    id: ID
    time: Int
    timeString: String
    day: Int
    dayString: String
    location: String
    committedAdorers: Int
    requiredNumberOfAdorers: Int
    users: [User]
    createdAt: String
    updatedAt: String
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    phoneNumber: String
    hours: [Hour]
    createdAt: String
    updatedAt: String
  }

  type AuthData {
    userId: String!
    token: String!
    tokenExpiration: Int!
  }

  type UserAggregates {
    totalCount: Int
  }

  type Query {
    hours(sortByDay: Boolean): [Hour]
    users(cursor: Int): [User]
    userAggregates: UserAggregates
    login(email: String!, password: String!): AuthData!
  }

  type Mutation {
    createUser(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      phoneNumber: String!
    ): User
    addHour(
      time: Int
      day: Int
      location: String
      requiredNumberOfAdorers: Int
    ): Hour
  }
`;

module.exports = typeDefs;
