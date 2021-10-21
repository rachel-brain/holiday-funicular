const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Channel {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    quantity: Int
    price: Float
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Customer {
    _id: ID
    businessName: String
    firstName: String
    email: String
    password: String
    channels: [Channel]
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    channels: [Channel]
    products(name: String): [Product]
    product(_id: ID!): Product
    customer: Customer
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addCustomer(businessName: String!, firstName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateCustomer(businessName: String, firstName: String, email: String, password: String): Customer
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;